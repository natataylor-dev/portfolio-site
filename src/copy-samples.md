---
layout: base.njk
title: Copywriting
permalink: /copy-samples/
---

# Copywriting

<p class="eyebrow">Words matter</p>
<p>Email, product copy, press and editorial writing: a few examples of copy with a clear purpose.</p>

<ul class="card-list">
{% for item in collections.copySamples %}
  <li>
    <h3><a href="{{ item.url | url }}">{{ item.data.title }}</a></h3>
    <p>{{ item.data.summary }}</p>
  </li>
{% endfor %}
</ul>
