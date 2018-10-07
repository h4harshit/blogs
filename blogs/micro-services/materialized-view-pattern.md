---
date: "2018-10-07"
title: "Materialized view pattern | Solution for distributed, time consuming & complex business queries "
series: "Micro-services"
keywords: "Micro-services, Materialized view, View"
category: "Technical"
---

In my [previous](https://blogs.h4harshit.com/micro-services/event-sourcing-pattern/) article, we talked about the event sourcing pattern. In the Event Sourcing pattern, we saw that instead of keeping the state of an object or a business transaction in the data store, Event store was getting utilized. 
In the current article, we're going to discuss about the materialized view pattern. Before introducing the materialized view pattern, I would want to rather draw your attention to the need of having this pattern. 
Let's think about the event store for the customer's cart. The customer may add an item to the cart or remove the already added item from the cart. So, the event store for the cart looks like following: 


![alt text](https://raw.githubusercontent.com/h4harshit/blogs/master/blogs/micro-services/img/materialized-view-pattern-event-store.png "Materialized view pattern")

As we can clearly see that the customer added a few items and then remove a few items from the cart. Now, suppose you want to present the data as to what all items were removed by the customer after adding it to the cart. Generally, this data will not be present in the data store for the items because the item was not sold. So, the state of the item in the data store is not changed, but there is an entry in the event store that the item was added to the cart and subsequently was removed. Hence, you will need to query the event store to get the required information. Now what is the complication in querying the event Store? Well, the complexity could be that 

- The items can be added or removed multiple times to a cart. 
- You're not querying the data store rather we are querying the events Store. Hence the performance of the query could be slow. 
- There may be many-many number of events store, hence it will be really complex to write such kind of a query.

Here, materialized view comes to rescue. Materialized view pattern suggests that a view can be created by executing complex and time consuming queries beforehand as per the requirement. Later, this view can be used to get the required data as and when needed. The materialized view can be refreshed on a periodic basis, so that we can get the updated information.


![alt text](https://raw.githubusercontent.com/h4harshit/blogs/master/blogs/micro-services/img/materialized-view-pattern.png "Materialized view pattern")


> Materialized View pattern is about generating a view in advance, in the required format, to support the efficient querying. 

Here are some of the cases where you would want to use the Materialized View -

- When the required data can be gathered only after executing a complex query. You wouldn't want to execute the query online as it may hamper the performance. 
- When the required data is not present in the data store but rather present in the Event Store. This is same as we discussed at the beginning of this article. 
- Privacy or security reasons - In some of the cases you wouldn't want an application to get access to all of your data. Hence, you can expose only the required amount of data in the form of a Materialized View.

It is not always suggested to use the Materialized View. Following are the few cases when you wouldn't want to use the Materialized View. 

- If this source data used for creating the Materialized View is frequently changing, then the information provided by the Materialized View will not be accurate. The cost for refreshing Materialized view could also be high.
- If the use case demands 100% accurate information all the time. Like in banking industry for transaction processing and amount inquiry, you cannot rely on the information which is not accurate or up to date. 

To conclude- 

> Materialized View, has very specific use cases where the data consistency may not be 100% necessary. Mostly for reporting purposes. When the data store is not always available for querying, then also Materialized View can be used. You need to keep refreshing the Materialized View periodically to keep it as close as possible to the reality. In the use cases when the data consistency is critical, Materialized View is not an option.


