---
date: "2018-10-06"
title: "Event soucring pattern | Persist the state of a business entity as events "
series: "Micro-services"
keywords: "Micro-services, Event sourcing, Distributed business transaction"
category: "Technical"
---

In the [last](https://blogs.h4harshit.com/micro-services/Saga-pattern/)  article, we talked about Saga pattern. Saga pattern is about executing a business transaction, which is spread across multiple local transactions, across multiple micro-services. One of the way for the micro-services to initiate local transaction in other micro-service is to publish an event. In this article, we will talk about the Event Sourcing pattern which is about publishing events by the micro-services whenever state of an object changes.

One thing to note here is that we shouldn't be seeing the Event Sourcing pattern just as a mechanism to publish the event. Rather it introduces change in the traditional way of storing the state of the object. Traditionally the applications data is stored in the relational tables. Whenever there is any modification to the data - 

- First the data is retrieved from the relational table 
- Data is modified 
- Modified data is again updated in the database table 

This approach has some disadvantages though. Some of these are - 

- Since multiple users can work on the application simultaneously, so it may slow down the performance of the system because of locking mechanism of the database. Also, it may impact the scalability of the applications. 

- It is also complex to design the application for concurrent processing. 

- This approach does not directly provide you, the history of operations performed on the data set. Or in other words, it is not directly possible to find the Audit trial on the data.

Event Sourcing pattern changes the way to persist the state of a business entity. Instead of persisting the object in a relational table and having only the current state of an object at any given time, Event Sourcing pattern propose to persist an object as a stream of events. So, you have an `Event Store`. 

Before going further, it is very important for us to understand what do you mean by `Event Store` because it will help us in understanding the rest of the article. 

> Event Sourcing pattern does not persist only the current state of an object but focus on all the state changes during the lifetime of an object. So, the store where the state of an object is persisted, is known as Event Store rather than the Data store in the case of event Sourcing pattern. 

Before we go ahead and see an example, let's all briefly discuss about the term `Append Only Event Store`. The event store proposed in this pattern is the append only event Store. So, you are just adding, the events as they occur in the lifetime of an object, but you are not deleting the event. So, the question here is what happens when you want to revert some event for an object? Well, reverting an event which is already occurred is also an event, isn't it? And if it is an event then it should also be appended to the Event Store. These kinds of events which revert the effects of the previously executed events also known as `Compensating Events`. Hence the event store is `Append Only Event Store`.   

Please look to the below diagram - 


![alt text](https://raw.githubusercontent.com/h4harshit/blogs/master/blogs/micro-services/img/event-sourcing-pattern.png "Event sourcing pattern")


We are extending the example that we had discussed in the Saga pattern article. There are three micro-services - 

- Inventory micro-service 
- Payment micro-service 
- Order processing & Shipment micro-service 

You can also see the event store for customer cart and customer order. Once the customer adds some items into the cart and proceed with checkout in The E-Commerce site, an event is recorded in the customer cart Event Store. Inventory micro-service has subscribed to the checkout event and does the inventory reservation. Once the inventory reservation is successful, the event is captured in the customer cart even store. Payment micro-service has subscribed to this event. 

Once payment is successful, this event is also recorded in the customer cart event store. Inventory micro-service has subscribed to this event and will update the inventory accordingly. Order processing & shipment service has also subscribed to the successful payment event and will start processing the order of the customer. In the above diagram, you can also see the event store for the customer order processing. 

I hope now you are clear that how the event Sourcing pattern is implemented for The E-Commerce site. How a single business transaction is spread across multiple micro-services and how the micro-services have subscribed to the events and coordinate accordingly. 
Just to extend this example little bit, if the customer remove some of the items from the cart. Then this action of the customer is also recorded as an event in the customer cart event store. Accordingly the subscribed micro-services will respond and will change the inventory.

To conclude: 

> Event Sourcing pattern is mainly talking about how to persist the state of an object. It proposes to store the state of an object/business entity as an event Store. The events in the event store can be replayed if the state of an object should be recreated. The event store proposed by the pattern is Append Only Event Store. Once the events are published there may be subscribers to those events and appropriate actions can be taken accordingly.

You can also see how the event Sourcing pattern works in conjunction with the Saga pattern, to carry out a business transaction which is the spread across multiple micro-services. How easy it would be now to add another external service that depends on the events. What you need to do is just subscribe to the existing events and define the actions to be taken. This pattern is really for the distributed applications.

