---
layout: post
title: "CRM Metrics in Telecom (Summary Whitepaper)"
---

### Components of CRM

Customer Relationship Management aims to get a single integrated view of customers. Typically, implementation of CRM has the goal of achieving higher profits and sales via customer satisfaction/reduced buying and selling costs. 

![image](https://user-images.githubusercontent.com/84352976/133138731-81777de7-d29f-492d-91a5-e6a8eb91c6fe.png)

Why do we use CRM over other frameworks in the sales process? 

CRM Model advantages versus other operational models are as follows:

* Churn Rates: Due to market maturity, small inconviences in price can cause customers to move carriers. CRM is in the frontline to understand customer interactions.
* Massive Data Collection: 
* Main product of customers is the call containing time-series stamps, source, destination, and network details. Status of network components are also available. 

Now that we know the power of CRM, we can break down CRM into:

* Operational CRM: Refers to services targeted toward customers to improve the acquisition process. The goal is to simplify customer interactions that improve customer acquision and retention. Topics include salesforce automation, marketing automation, and service automation to see historical customer complaints.
* Collaborative CRM: Communciation between different departments related to customer service. Goal is to simplify workflows to standardize customer interaction across departments. 
* Analytical CRM: Understanding of the customer, the can include segmentation, profitability analysis, customer value, Personalization, and predictive modeling. 

On the Operational and Collaborative CRM side, we can build good datasets and proper processes to improve our analytics capabilities. The main modeling work typically lives in the Analytical CRM category. 

![image](https://user-images.githubusercontent.com/84352976/133139838-8adfcf1b-94d5-4e32-bbd1-a0021e64e8d8.png)

Analytical CRM tasks include:

1. Customer Identification: Tagging the customer via websites/marking mediums, surveys, and communication
2. Customer Differentiation: Differentiate each customer according to their demands and requirements
3. Customer Interaction: Interacting with the customer to check in on changing needs over time
4. Customization: Customize products so customers are treated uniquely with all demands fulfilled.


To enable the above tasks, I propose the following set of metrics, datasets and techniques to build an CRM solution:

### Operational Metrics:

Call Details Data: Record of all calls through the provider

Metrics:
 * Average Call Duration
 * % No-answer Calls
 * % Calls from/ to a different area code
 * % Weekday Calls (Monday- Friday)
 * % of Daytime Calls (9 am- 5 pm)
 * Average # Calls Received Per Day
 * Average # Calls Originated Per Day
 * Unique Area Codes Called over certain Time period (P)

Texting Datasets

4G/5G Datasets

Networking Datasets (Engineering data mainly used for network fault isolation)
 
  
### Customer Analytics Metrics:

Customer Data (Typically same as credit reporting agencies):
  * Name, Address
  * Service Plan
  * Contact Information
  * Credit Score
  * Income
  * Payment History

Customer/Sales Interaction Datasets
  

### Papers (CRM Techniques) 

**Name:** Mining
Profitability of
Telecommunicatio
n Customers
Using K-Means
Clustering  

 Notes: K-mean
 clustering method
  to evaluate
 the customer
 profitability   

**Name:** Case Study on
Cluster Analysis
of The Telecom
Customers Based
on Consumers
Behavior

 Notes: Correlation analysis to customer segmentation (Kohonen clusters)




 
  


