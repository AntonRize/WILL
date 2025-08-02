---
layout: default
title: News
---

# News & Updates

This section provides a list of current projects, hypotheses, and active research directions.

<div class="home">
  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h3>
      </li>
    {% endfor %}
  </ul>
</div>