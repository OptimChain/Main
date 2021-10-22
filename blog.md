---
layout: default
title: Posts
---

<ul class="posts-wrapper">
   {% for post in site.posts %}
   <li>
      <h3>
         <a href="/Main/{{post.url}}">{{post.title}}</a> 
         <span class="date-meta">Published In:  <span class="post-date">{{post.date | date_to_long_string}}</span></span>
      </h3>
   </li>
   {% endfor %}
</ul>
