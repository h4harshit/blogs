---
date: "2018-10-05"
title: "Saga pattern | Distributed business transactions for micro-services"
series: "Micro-services"
keywords: "Micro-services, Saga, Distributed business transaction"
category: "Technical"
---

In this discussion, we will talk about the distributed business transaction processing using micro-services. Going with the single responsibility principle, there may be more than one micro-services for performing one business operation. Let's take an example of an order processing system in an E-Commerce site. The steps involved in processing the order is as listed below - 

- Customer selects a product to purchase. 
- User make a payment. 
- If the payment is successful shipment process for the purchased item is started. 

Let's assume that there are three micro-services which are involved in order processing. These are 

- Inventory 
- Payment 
- Shipment 

Inventory micro-service will be responsible to check whether there is enough inventory to process the customer’s order or not. Payment micro-service will be responsible for processing the payment from the customer. And shipment micro-service will be responsible for shipment of the purchased item to the customer. 
Each of these micro-services will have different databases. One micro-service will not have direct Access to the database of other micro-service. Hence two phase commit will not be an option here. And there should be some coordination between the execution of the services to process one business operation. It should not happen that there is no enough inventory and customer was asked to pay for it. Or the payment was not successful but the shipment process for the purchased item is started.

Here comes Saga pattern into picture. Saga is a sequence of local transactions. Each of the transaction in the Saga is initiated using a service or rather micro-services. The first transaction in the Saga is always initiated by an external event or external request. In the example of order processing, the first transaction in Saga will be executed once per user clicks on the button "Purchase" in The E-Commerce site. A Saga contains all the local transactions which are required to perform a business transaction or operation.

Please see the below diagram for the sequence of local transactions to process the order from a customer - 

<< Image here >>

![alt text](https://raw.githubusercontent.com/h4harshit/blogs/master/blogs/apache-kafka/img/apache-kafka.png "Apache Kafka")



Once the customer clicks on the Purchase button the saga for performing the business operation (Customer order processing) is initiated. The first operation in the Saga is to reserve the inventory. Once the inventory is reserved successfully an event will be triggered which will initiate another local transaction in the Saga. The second local transaction in the Saga is to initiate the payment. Once the payment processing is successfully complete " allocate inventory" local transaction will be initiated. This transaction will reduce the quantity of the available inventory and eventually initiate the shipment process. 


Of course, in this example we have only talked about the successful case. We are assuming that all the local transactions are executed successfully. What if any of the local transaction is failing in between? In such a case, Saga should be able to execute a series of `compensating transaction` that will undo the effect of the successful local transactions performed till now. 

Let's take an example where payment processing was not successful.  

<< Image here >>

![alt text](https://raw.githubusercontent.com/h4harshit/blogs/master/blogs/apache-kafka/img/apache-kafka.png "Apache Kafka")

In this case a local transaction will be performed by the inventory micro-service for reversal of the reservation transaction. This is how a failure of a local transaction is handled in the Saga Design pattern. 

There are two ways implement the Saga pattern: 
- Choreography - In this method each of the local transaction publishes events, which will eventually trigger, another local transaction in the Saga. The event will be published, whether the local transaction is successful or not. If the local transaction is successful, then the published event will trigger another local transaction is Saga which will help completing the business transaction. If the local transaction is failed, then the published event will trigger the compensating transaction which will reverse the effect of the successful local transaction. 
- Orchestration - in this way, an orchestrator will hold the responsibility to execute all the local transactions in the Saga to fulfill the business transaction. Generally, a new service is defined which plays the role of an orchestrator. Responsibility of the orchestrator service is to instruct each of the participant in the business transaction, as to what to do and when. A state machine is a typical example of a Saga orchestrator.

So, to conclude, 

> Saga pattern is used when a business transaction can be performed with the help of several local transactions. Saga is a series of local transactions. If any of the local transaction fails in between, then the compensating transaction will be initiated, and it'll reverse the impact of already successful local transactions. Two most popular ways to implement Saga pattern is choreography and orchestration.


