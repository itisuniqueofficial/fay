---
layout: default
title: Home
---

<div itemscope itemtype="https://schema.org/WebSite">
  <h1 itemprop="name">Scam Review Hub</h1>
  <p itemprop="description">Detailed scam checks of websites — including SSL, domain age, hosting, and trust score.</p>

  <section>
    <h2>Latest Reviews</h2>
    <ul>
      {% for site in site.sites %}
        <li itemscope itemtype="https://schema.org/Review">
          <a href="{{ site.url }}" itemprop="url">
            <span itemprop="itemReviewed" itemscope itemtype="https://schema.org/WebSite">
              <span itemprop="name">{{ site.title }}</span>
            </span>
          </a>
          — Score: <span itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
            <span itemprop="ratingValue">{{ site.score }}</span>
          </span>
          — <span itemprop="reviewBody">{{ site.status }}</span>
        </li>
      {% endfor %}
    </ul>
  </section>
</div>