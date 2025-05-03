---
title: Example.com
score: 45
status: Scam or Suspicious
layout: site
permalink: /com/example/www/
site_url: https://www.example.com
date: 2025-05-01
last_reviewed: 2025-04-30
meta_title: Example.com - Is it Safe? | Scam Review
meta_description: A full analysis of Example.com including trust score, scam risk, SSL status, domain age, and more.
---

<div itemscope itemtype="https://schema.org/Review">
  <div itemprop="itemReviewed" itemscope itemtype="https://schema.org/WebSite">
    <meta itemprop="name" content="Example.com">
    <meta itemprop="url" content="{{ page.site_url }}">
    <meta itemprop="inLanguage" content="en">
    <meta itemprop="description" content="{{ page.meta_description }}">
    <meta itemprop="alternateName" content="example.com scam review">
  </div>

  <meta itemprop="datePublished" content="{{ page.date | date_to_xmlschema }}">
  <meta itemprop="dateModified" content="{{ page.last_reviewed | date_to_xmlschema }}">

  <h1>{{ page.title }} - Scam or Legit?</h1>

  <section>
    <h2>Trust Score</h2>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="worstRating" content="0">
      <meta itemprop="bestRating" content="100">
      <span itemprop="ratingValue">{{ page.score }}</span> / 100
    </div>
    <p itemprop="reviewBody">{{ page.status }} — Based on domain age, SSL certificate, hosting, and public trust signals.</p>
  </section>

  <section>
    <h2>Website Analysis</h2>
    <table>
      <tr><td><strong>Meta Title:</strong></td><td>{{ page.meta_title }}</td></tr>
      <tr><td><strong>Meta Description:</strong></td><td>{{ page.meta_description }}</td></tr>
      <tr><td><strong>Domain Age:</strong></td><td>5 years</td></tr>
      <tr><td><strong>SSL Certificate:</strong></td><td>Valid</td></tr>
      <tr><td><strong>WHOIS Info:</strong></td><td>Public</td></tr>
      <tr><td><strong>Registrar:</strong></td><td>NameCheap Inc.</td></tr>
      <tr><td><strong>Server Location:</strong></td><td>Cloudflare - USA</td></tr>
      <tr><td><strong>First Added:</strong></td><td>{{ page.date | date: "%B %d, %Y" }}</td></tr>
      <tr><td><strong>Last Reviewed:</strong></td><td>{{ page.last_reviewed | date: "%B %d, %Y" }}</td></tr>
    </table>
  </section>

  <div itemprop="author" itemscope itemtype="https://schema.org/Organization">
    <meta itemprop="name" content="It Is Unique Official Scam Review Team">
  </div>
</div>