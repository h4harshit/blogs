---
date: "2018-01-02"
title: "Apache kafka - An introduction - Part 1"
series: "Apache Kafka"
keywords: "Apache Kafka"
category: "Technical"
---
# Apache kafka - An introduction

## Objective 


## Apache kafka 

Apache kafka is a distributed streaming plattform. (From https://kafka.apache.org/intro). To be able to understand this statement, we should be able to understand two key words here: "Distributed" & "Streaming".

I will not go deep into these terms as of now, but let's see a very simple example usage of Kafka.  Kafka is used to build a data pipeline between two applications. Let's say there are two applications i.e. Order processing & Inventory maintenence. Kafka can be used act as a medium of commiunication between these two applications. 

![alt text][logo]

![alt text](https://github.com/h4harshit/blogs/blob/master/blogs/apache-kafka/img/apache-kafka-1.jpg "Apache kafka")

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

[logo]: https://github.com/h4harshit/blogs/blob/master/blogs/apache-kafka/img/apache-kafka-1.jpg "Apache kafka"

In the above example, both the applications are able to send messages to each other thru kafka. There are various ways which can be used for facilating communication between applications, and you shouldn't be using kafka for implementing every communication between two or more applications. Kafka is best suited as a `messaging queue` or `messaging system`. In my opinion kafka is for near real-time communication. Wherever you want synchronous communication for example in any banking applications where you are performing a transaction and the amount should be reflected in your account real time, in those scenarios Apache kafka may not be best suited.

Now let's try to understand what do we mean when we say that Apache Kafka is a distributed system. A distributed system can be viewed as the interconnections of several heterogeneous subsystems. When we are using Apache Kafka then essentially the data will be written (Producers) to Kafka and some other applications (Consumers) will read the data from Apache Kafka. 

Writing the streams of data into Apache kafka and reading streams out of Apache kafka is distributed. That will mean that multiple streams can be written into Apache Kafka simultaneously and there are provisions by which reading & processing of those streams are also distributed. 



