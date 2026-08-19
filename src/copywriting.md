---
layout: base.njk
title: Copywriting
permalink: /copywriting/
---

# Copywriting

<p>Email, product copy, press and editorial writing: a few examples of copy with a clear purpose.</p>

<div class="pull-quote">
  <p class="quote-label">words matter</p>
  <blockquote>
    "Off I go, rummaging about in books for sayings which please me."
    <cite>– Michel de Montaigne</cite>
  </blockquote>
</div>

<div class="featured-grid">
{% for item in collections.copySamples %}
  <a class="featured-card" href="{{ item.url | url }}">
    <img src="{{ item.data.cardImage | url }}" alt="{{ item.data.cardAlt }}" style="object-position: {{ item.data.cardPosition | default: "center" }};">
    <span class="featured-card-title">{{ item.data.title }}</span>
    <span class="featured-card-skills"><span class="eyebrow-label">Skills employed:</span>{{ item.data.skills }}</span>
  </a>
{% endfor %}
</div>
