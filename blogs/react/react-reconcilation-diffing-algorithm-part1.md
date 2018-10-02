---
date: "2018-10-02"
title: "React reconcilation and diffing algorithm Part - 1"
series: "React JS"
keywords: "React JS, Reconcilation, Diffing algorithm"
category: "Technical"
---

In the couple of articles, we are going to discuss about reconciliation in react. To provide you a background we are not going to start directly with the reconciliation rather we are going to discuss some prerequisites to understand about reconciliation. 

I am going to divide the talk about reconciliation into two articles and let me provide you the outline for the same. In the first article, we will talk about DOM i.e. Document object model. We will understand what is DOM, what are the inefficiencies associated with DOM and why ReactJS has come up with virtual DOM. 

Then in the next article we will talk about the idea behind reconciliation, what is Diffing algorithm and how does it work. With said that let's start with the discussion. 
DOM stands for document object model. When a browser display a web page it'll be creating a document object model of the page. Document object model is nothing but a programming API for HTML and XML documents. It represents the logical structure of the document and the way the document should be accessed and manipulated. When we talk about the web page we are essentially are talking about the HTML document. You can also visualize an HTML DOM as a tree of objects.


![alt text](https://raw.githubusercontent.com/h4harshit/blogs/master/blogs/react/img/DocumentObjectModel.png "React Reconcilation & Diffing algorithm")


The DOM represented in the above diagram is for the following HTML: 

``` 
<html>
<body>
<div> 
  <h1>React</h1> 
  <h2>is</h2>
</div>
<h1>easy</h1>
</body>
</html>

```

The structures and operations comprising DOM (document object model) are defined under W3C specifications. As per the specifications, the Document Object Model is a platform and language neutral interface that allows programs and scripts to dynamically access and update the content, structure and style of the documents.

>Document object model defines the logical structure of the document, the way documents is accessed and manipulated. It also define layouts, content and style sheet of the document.


So far so good. The challenge starts when any element of DOM is added or updated/deleted. A lot of work has to go to have any small change in DOM. Following are the few activities that will be performed do the same: 

- The HTML will be parsed 
- Communication with the browser will happen before updating any of the DOM elements. 
- Existing elements may need to be destroyed. 
- New elements may be created.
- Styles will be computed. 
- Physical location of the elements will be derived. 
- Browser will be notified for the change. 
- Actual change will happen on the browser. 

As you can see a lot has to go for even a small change in the DOM. Hence it may affect the rendering performance of any JavaScript framework.

ReactJS has come up with concept called virtual DOM to address the problem stated above. The idea behind virtual DOM is that, instead of going ahead and updating the DOM directly, a computation will be performed beforehand and any changes to the DOM will be identified. This will help in carrying out the DOM manipulation in an efficient way and many of the DOM updates can be combined in a batch. For example, if because of some user interactions, style of an element must be changed, then using virtual DOM, it can be easily identified that the element should not be deleted and then recreated. Instead the DOM can be instructed to directly update the style of an element. 

Virtual DOM is kept in memory so it is easily accessible and operations & comparisons are relatively cheaper as compared to the actual DOM. Whenever state of an element is changed in react a new virtual Dom will be created. And then it will be compared with the existing virtual DOM, and all the Dom manipulation operations will be identified. Post this activity react will instruct the actual DOM only to update the required portions. Hence it may save considerable amount of time and efforts. 

The process or the algorithm which react uses to identify the difference of the new virtual DOM (because of the state changes of react elements) as compared to the existing virtual DOM is called as `Reconciliation`. 

We will discuss more about reconciliation and define algorithm in the next article. 
