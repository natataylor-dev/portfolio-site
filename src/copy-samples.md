---
layout: base.njk
title: Copy Samples
permalink: /copy-samples/
---

# Copy Samples

<p>Craft work: email, product copy, press and editorial writing.</p>

<ul class="card-list">
{% for item in collections.copySamples %}
  <li>
    <h3><a href="{{ item.url }}">{{ item.data.title }}</a></h3>
    <p>{{ item.data.summary }}</p>
  </li>
{% endfor %}
</ul>
