---
layout: base.njk
title: Home
---

<p class="eyebrow">Copy writing and content design</p>

# Natalie Taylor

[PLACEHOLDER: one or two sentence positioning statement -
e.g. "I turn complex marketing and ecommerce operations into clear,
on-brand, conversion-focused content — 15+ years across retail,
ecommerce and consultancy."]

<div class="placeholder-note">
This is placeholder copy for the initial build. Replace with real
positioning statement and featured work links once case studies are drafted.
</div>

## Featured work

<ul class="card-list">
{% for item in collections.caseStudies | reverse %}
  <li>
    <p class="eyebrow">Case Study</p>
    <h3><a href="{{ item.url | url }}">{{ item.data.title }}</a></h3>
    <p>{{ item.data.summary }}</p>
  </li>
{% endfor %}
</ul>

[See all Copy Samples &rarr;]({{ '/copy-samples/' | url }})
