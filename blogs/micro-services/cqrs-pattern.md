---
date: "2018-10-11"
title: "CQRS pattern | Segregation of Command and Query to improve scalability, performance and security  "
series: "Micro-services"
keywords: "Micro-services,  Command and Query Responsibility Segregation"
category: "Technical"
---

In this article, we're going to talk about the CQRS pattern. CQRS stands for Command and Query Responsibility Segregation. Let's first understand what is it all about. 
In any application, you will be performing various CRUD operations. Normally if you notice, there will be much more select operations then the create or update operations. If you take an example of an E-commerce site, you will be creating some products(items) to sell and those products will be seen by various customer. So, a product which is created only once will be retrieved many times. 

> Normally in an application, there will be more data retrieval operations as compared to data creation and update operations. 

So, how does it make a difference to have more select operations then other types of operations?

Well, there are a few points to consider here - 

- Normally there will be differences between the read and write representations of data. This may mean that the data we are writing in multiple tables, may be required to be fetched and shown as one record. So, when the data is getting stored in multiple tables while showing it is shown as a single entity. Hence, there is a difference between the read and write representations of the data. 
- Like we talked that there will be more select operations. So, it may increase the load on your data source or data store and it may affect the performance of the write or update operations. 
- There may also be a scenario that a single data store is getting utilized by several applications. In such a case, we must provide access to the data store to all the applications. What if one of the application should not be provided access to the complete data store? Well, this condition can be partially met with setting the permissions to the data store level and to the data objects level. Nevertheless, it would be much easier to implement if we have command and query segregation.

The solution for the above-mentioned concerns is to have different data models for querying and updates of data. When the query model contains de-normalized data, performance will be maximized, while de-normalization is not suggested for the updates operation. So, having different data models for reading and updates operation will make sense. 
Till now, we talked about the advantages of the CQRS pattern. Let's also talk about some of the issues or concerns in the CQRS pattern. 

- Dividing the data stores in two separate physical stores can add complexity in terms of resiliency and eventual consistency. 
- CQRS code can't be generated using the scaffold mechanisms. Hence, they will be efforts required to write the CQRS code and to maintain it.

[Materialized view](https://blogs.h4harshit.com/micro-services/materialized-view-pattern/), is one of the way to have different data model for read operations. You can find more information about Materialized view pattern by checking our last [article](https://blogs.h4harshit.com/micro-services/materialized-view-pattern/). Materialized view can be typically generated asynchronously using the data store or the event store. ([Event Sourcing pattern](https://blogs.h4harshit.com/micro-services/event-sourcing-pattern/))

To conclude - 

> CQRS pattern is used for enhancing the performance of the select and updates operations by having different data models for each of them. While it offers, several advantages including the scalability, performance and security it also adds complexity for resiliency, maintainability. CQRS pattern should not be used when the domain of the business rules is very simple. Considering to apply CQRS pattern to a limited section of your application, will be most suggestable approach


