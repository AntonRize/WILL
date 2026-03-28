"""
Video 2A Assembly v2 - Memory-efficient ffmpeg approach.
Encodes each slide as a short clip, then concatenates.
"""
import subprocess, json, os, sys

ASSET_DIR = "/sessions/friendly-practical-carson/mnt/outputs/video2a/assets"
OUTPUT_DIR = "/sessions/friendly-practical-carson/mnt/outputs/video2a"
SEGMENTS_FILE = "/sessions/friendly-practical-carson/segments.json"
TMP_DIR = "/sessions/friendly-practical-carson/tmp_clips"

SEGMENT_TO_FRAME = {
    "hook_einstein":        "01_einstein_quote.png",
    "hook_claim":           "02_title_card.png",
    "blindspot_intro":      "03_historical_deletions.png",
    "blindspot_pattern":    "03_historical_deletions.png",
    "blindspot_split":      "04_bi_variable_split.png",
    "blindspot_tests":      "05_internal_checks.png",
    "blindspot_conclusion": "05_internal_checks.png",
    "dissolve_principle":   "06_dissolve_split.png",
    "dissolve_will":        "06_dissolve_split.png",
    "dissolve_audit":       "06_dissolve_split.png",
    "carriers_lemmas":      "07_three_lemmas.png",
    "carriers_s1":          "08_s1_derivation.png",
    "carriers_s2":          "09_s2_derivation.png",
    "carriers_protocol":    "10_constructive_protocol.png",
    "duality_intro":        "11_amplitude_phase.png",
    "duality_budget":       "12_budget_tradeoff.png",
    "duality_timedilation": "13_dual_time_dilation.png",
    "duality_trainanalogy": "13_dual_time_dilation.png",
    "close":                "14_logical_chain.png",
}
END_CARD = "15_end_card.png"
END_CARD_DURATION = 6

def load_segments():
    with open(SEGMENTS_FILE) as f:
        return json.load(f)

def get_audio_duration(path):
    r = subprocess.run(
        ["ffprobe", "-v", "quiet", "-show_entries", "format=duration", "-of", "csv=p=0", path],
        capture_output=True, text=True
    )
    return float(r.stdout.strip())

def make_clip(img_path, duration, output_path, fps=10):
    """Create a short mp4 clip from a single image."""
    cmd = [
        "ffmpeg", "-y",
        "-loop", "1",
        "-i", img_path,
        "-c:v", "libx264",
        "-t", f"{duration:.3f}",
        "-pix_fmt", "yuv420p",
        "-r", str(fps),
        "-preset", "ultrafast",
        "-crf", "23",
        "-vf", "scale=1920:1080",
        output_path
    ]
    subprocess.run(cmd, capture_output=True, check=True)

def build(audio_path=None):
    os.makedirs(TMP_DIR, exist_ok=True)
    segments = load_segments()

    original_total = sum(s["duration"] for s in segments)
    if audio_path and os.path.exists(audio_path):
        audio_dur = get_audio_duration(audio_path)
        scale = audio_dur / original_total
        print(f"Audio: {audio_dur:.1f}s, scale={scale:.2f}")
    else:
        target = 466
        scale = target / original_total
        print(f"No audio. Target {target}s, scale={scale:.2f}")

    # Consolidate frames
    frames = []
    for seg in segments:
        fn = SEGMENT_TO_FRAME[seg["id"]]
        dur = seg["duration"] * scale
        if frames and frames[-1][0] == fn:
            frames[-1] = (fn, frames[-1][1] + dur)
        else:
            frames.append((fn, dur))
    frames.append((END_CARD, END_CARD_DURATION))

    total = sum(d for _, d in frames)
    print(f"\n{len(frames)} slides, total: {total:.0f}s ({int(total)//60}:{int(total)%60:02d})")

    # Encode each slide as a clip
    clip_paths = []
    t = 0
    for i, (fn, dur) in enumerate(frames):
        clip_path = os.path.join(TMP_DIR, f"clip_{i:02d}.mp4")
        img_path = os.path.join(ASSET_DIR, fn)
        m, s = int(t)//60, int(t)%60
        print(f"  [{i+1}/{len(frames)}] {m}:{s:02d} {fn} ({dur:.1f}s)...", end=" ", flush=True)
        make_clip(img_path, dur, clip_path)
        clip_paths.append(clip_path)
        print("ok")
        t += dur

    # Write concat list
    concat_file = os.path.join(TMP_DIR, "list.txt")
    with open(concat_file, "w") as f:
        for cp in clip_paths:
            f.write(f"file '{cp}'\n")

    # Concatenate
    video_only = os.path.join(OUTPUT_DIR, "video_only.mp4")
    print("\nConcatenating clips...")
    subprocess.run([
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_file,
        "-c", "copy",
        video_only
    ], check=True, capture_output=True)

    # Mux audio
    final = os.path.join(OUTPUT_DIR, "Video_2A_Why_Spacetime_Energy_Never_Two_Things.mp4")
    if audio_path and os.path.exists(audio_path):
        print("Muxing audio...")
        subprocess.run([
            "ffmpeg", "-y",
            "-i", video_only, "-i", audio_path,
            "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
            "-shortest", final
        ], check=True, capture_output=True)
        os.remove(video_only)
    else:
        os.rename(video_only, final)

    # Cleanup
    for cp in clip_paths:
        os.remove(cp)
    os.remove(concat_file)
    os.rmdir(TMP_DIR)

    size_mb = os.path.getsize(final) / (1024*1024)
    print(f"\nDone! {final}")
    print(f"Size: {size_mb:.1f} MB")
    return final

if __name__ == "__main__":
    audio = sys.argv[1] if len(sys.argv) > 1 else None
    build(audio)
