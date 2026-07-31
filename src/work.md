---
layout: base.njk
title: Work
permalink: /work/
---

# Work

An overview of everything on the site, grouped by type.

## Case studies

<ul class="card-list">
{% for item in collections.caseStudies %}
  <li>
    <h3><a href="{{ item.url }}">{{ item.data.title }}</a></h3>
    <p>{{ item.data.summary }}</p>
  </li>
{% endfor %}
</ul>

## Copy samples

<ul class="card-list">
{% for item in collections.copySamples %}
  <li>
    <h3><a href="{{ item.url }}">{{ item.data.title }}</a></h3>
    <p>{{ item.data.summary }}</p>
  </li>
{% endfor %}
</ul>
