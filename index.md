---
layout: default
title: Home
---

<div itemscope itemtype="https://schema.org/WebSite">
  <h1 itemprop="name">Scam Review Hub</h1>
  <p itemprop="description">Check if a website is safe or a scam manually reviewed by our team.</p>

  <ul>
    {% for site in site.sites %}
      <li><a href="{{ site.url }}">{{ site.title }}</a> – Trust Score: {{ site.score }}%</li>
    {% endfor %}
  </ul>
</div>
