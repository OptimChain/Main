---
layout: default
---

{% assign team_data = site.data.team_members %}

<div class="container">
	<div class="row">
	   {% for team in team_data.members_info %}
		 <div class="col-2">
		 	<div class="single-team-member">
		 		<div class="team-member-thumb">
		 			<img src="{{ team.member.profile_image }}" alt="{{ team.member.name }}" class="img-fluid" />
		 		</div>
		 		<div class="team-member-info">
		 			<h3>{{ team.member.name }}</h3>
		 			<p>{{team.member.description}}</p>
		 			<div class="social-links">
                      {% for social in team.member.social_profiles %}
		 			   <a href="{{social.url}}" target="_blank" rel="noopener"><span class="{{ social.icon }}" aria-hidden="true"></span><span class="screen-reader-text">{{ social.title }}</span></a>
                      {% endfor %}
		 			</div>
		 		</div>
		 	</div>
		 </div>
		 {% endfor %}
	</div>
</div>
