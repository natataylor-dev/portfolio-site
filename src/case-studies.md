---
layout: base.njk
title: Case Studies
permalink: /case-studies/
---

# Case Studies

<p>Process-led work: strategy, journey mapping, taxonomy and brand voice
built from scratch, mostly inside small, lean teams.</p>

<ul class="card-list">
{% for item in collections.caseStudies %}
  <li>
    <h3><a href="{{ item.url | url }}">{{ item.data.title }}</a></h3>
    <p>{{ item.data.summary }}</p>
  </li>
{% endfor %}
</ul>
