---
layout: default
logos:
  - url: "assets/images/logos/01.png"
  - url: "assets/images/logos/02.png"
  - url: "assets/images/logos/03.png"
  - url: "assets/images/logos/04.png"

external_lists:
  - title: "Cloud Based Hydroponics Sensoring (Click Here)"
    url: "https://github.com/OptimChain/Cloud_Hydroponics"
  - title: "Modular QR based Inventory Control (Click Here)"
    url: "https://github.com/OptimChain/QR_ERP"
  - title: "Databricks R and PowerBi Quota Ticket Forecasting (Click Here)"
    url: "https://github.com/IamJasonBian/Demo_ML"

---


###  What We Are
OptimChain is when industrial engineering meets analytics. 

Let us introduce your supply chain, manufacturing, and inventory problems to the cloud. We create proof-of-concept time-series analytics, script automation, sensoring, web scraping, BI, and factory floor level integration within an industrial engineering context. 

Typically, a proof-of-concept demo is small and localized to a single application as an MVP. This allows an organization to take their first step in cloud services and envision a strategy to expand cloud capabilities. We believe this approach allows analytical thinking to scale throughout the organization. 


### Custom End to End Tech stack

Programming Languages: Python (Numpy, Pandas, Django, Flask), R (dplyr, tidyverse), SQL, Spark SQL,  C++, Javascript, C
Data Engineering/Cloud Services: Airflow, Azure, Azure DataLake, Azure DataFactory, Azure Eventhub, Azure Synapse, AWS S3 AWS Sagemaker, AWS EMR, AWS Lambdas, AWS Glue, hdfs, Parquet, Databricks, Databricks Delta Lake, SSMS, Redshift, Azure Devops, Codecommit, Github Lab
Visualization: PowerBi, ggplot, matplotlib, Tableau, Shiny Server, Tkinter, 
Statistics/Optimization: ARIMA, Regression/Random Forest, Linear Programming, Markov Chains, Simulation
Misc Infra: bash, grep, regex, git, CI/CD brazil, Cloudformation, 
Integration: Selenium, Beautiful Soup
IoT: Raspberry Pi, Azure Sphere


### Sample Demo Implementations with Code:

<ul class="external-lists">
{% for list in page.external_lists %}
  <li>
    <a href="{{ list.url }}">
      {{ list.title }}
    </a>
  </li>
{% endfor %}
</ul>
<div class="cards-lists">
  <div class="single-card">
    <div class="card-thumb">
      <img class="lab-img" src="{{ site.url }}/assets/images/labs/01.png" alt=""/>
    </div>
    <div class="card-body">
    <p>
      In the current Hydroponics Industry, sensors are used to monitor floor level hydraulic systems for both water and air deviations. Downtime of any components in this sensoring setup would cause significant damage to greenhouse plant health. Cloud Hydroponics is a cloud azure instrumentation system to complement the existing floor level greenhouse networks. Cloud instrumentation will allow alerting, monitoring, and real time storage of sensor telemetry at scale with customizability.
    </p>
    </div>
  </div>
  <div class="single-card">
    <div class="card-thumb">
      <img class="lab-img" src="{{ site.url }}/assets/images/labs/02.png" alt=""/>
    </div>
    <div class="card-body">
    <p>
      QR ERP is a product demo for a cloud based QR scanning system. Small manufacturing facilities need an inventory tracking solution that is lightweight, fast, and accessible without all the expensive bells and whistles that large ERPs typically come with. With our setup, small manufacturing factories can print QRcodes as action modules and auto-increment inventory, reconcillate warehouse stock, and create full builds via Bill of Materials with their phone!
    </p>
    </div>
  </div>
  <div class="single-card">
    <div class="card-thumb">
      <img class="lab-img" src="{{ site.url }}/assets/images/labs/03.png" alt=""/>
    </div>
    <div class="card-body">
    <p>
      Statistical time-series forecast + classification done for a cilent with PowerBi front end code + R backend code in harmony with cloud orchestration services. Work was to triangulate manufacturing plans and orders for a major US manufacturer. Overall product allowed for demand shaping across seven cilent manufacturing sites.
    </p>
    </div>
  </div>
</div>

### Previous Customers

{% assign galleries = page.logos %}
<div class="gallery-wrapper">
{% for gallery in galleries %}
  <img src="{{ gallery.url }}" alt="gallery" />
{% endfor %}
</div>






### Contact

Contact
Email: cloud@optimchain.org
Phone: 734-730-6569


Optimchain LLC  All Rights Reserved

