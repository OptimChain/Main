---
layout: default
title: Posts
---

<ul class="posts-wrapper">
   {% for post in site.posts %}
   <li>
      <h3><a href="Main/{{post.url}}">{{post.title}}</a> </h3>
   </li>
   {% endfor %}
</ul>

   



