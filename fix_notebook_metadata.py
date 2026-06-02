#!/usr/bin/env python3
"""
Fix notebook metadata to resolve GitHub rendering errors.
This script normalizes all Jupyter notebooks in the Colab_Notebooks directory
to be compatible with GitHub's latest nbformat v5.10.4 and nbconvert v7.17.1.
"""

import json
import os
from pathlib import Path

def fix_notebook(notebook_path):
    """Fix metadata in a single notebook."""
    with open(notebook_path, 'r', encoding='utf-8') as f:
        nb = json.load(f)
    
    # Ensure top-level metadata exists and is complete
    if 'metadata' not in nb:
        nb['metadata'] = {}
    
    nb_meta = nb['metadata']
    
    # Ensure required metadata fields exist
    if 'kernelspec' not in nb_meta:
        nb_meta['kernelspec'] = {
            'display_name': 'Python 3',
            'language': 'python',
            'name': 'python3'
        }
    
    if 'language_info' not in nb_meta:
        nb_meta['language_info'] = {
            'codemirror_mode': {'name': 'ipython', 'version': 3},
            'file_extension': '.py',
            'mimetype': 'text/x-python',
            'name': 'python',
            'nbconvert_exporter': 'python',
            'pygments_lexer': 'ipython3',
            'version': '3.10.0'
        }
    
    # Fix cells: ensure every cell has proper metadata
    for cell in nb.get('cells', []):
        if 'metadata' not in cell:
            cell['metadata'] = {}
        
        # For code cells, ensure outputs field exists
        if cell['cell_type'] == 'code':
            if 'outputs' not in cell:
                cell['outputs'] = []
            if 'execution_count' not in cell:
                cell['execution_count'] = None
        
        # For markdown cells, ensure metadata is dict
        if cell['cell_type'] == 'markdown':
            pass  # Metadata can be empty for markdown
    
    # Ensure nbformat versions are correct
    nb['nbformat'] = 4
    if 'nbformat_minor' not in nb:
        nb['nbformat_minor'] = 4
    
    # Write back
    with open(notebook_path, 'w', encoding='utf-8') as f:
        json.dump(nb, f, indent=1, ensure_ascii=False)
    
    return True

def main():
    notebook_dir = Path('Colab_Notebooks')
    notebook_files = list(notebook_dir.glob('*.ipynb'))
    
    print(f"Found {len(notebook_files)} notebooks")
    print("=" * 60)
    
    fixed_count = 0
    for nb_path in sorted(notebook_files):
        try:
            if fix_notebook(nb_path):
                print(f"✓ Fixed: {nb_path.name}")
                fixed_count += 1
        except Exception as e:
            print(f"✗ Error fixing {nb_path.name}: {e}")
    
    print("=" * 60)
    print(f"Successfully fixed {fixed_count}/{len(notebook_files)} notebooks")
    print("\nNow commit these changes:")
    print("  git add Colab_Notebooks/*.ipynb")
    print("  git commit -m 'Fix: Normalize notebook metadata for GitHub rendering compatibility'")
    print("  git push")

if __name__ == '__main__':
    main()
