---
date: "2018-10-03"
title: "React reconcilation and diffing algorithm Part - 2"
series: "React JS"
keywords: "React JS, Reconcilation, Diffing algorithm"
category: "Technical"
---

In the last article, we discussed the prerequisites for understanding the Reconciliation and Diffing algorithm. We talked about DOM, we saw the challenges with DOM manipulation. We also talked about virtual DOM. If you have not gone through the article I would suggest you to please go through that first and then come back to this article. Please follow this [link](https://blogs.h4harshit.com/react/react-reconcilation-diffing-algorithm-part1/) to go to part 1.

It will be worth mentioning here that React elements are immutable. Once an element is created it cannot be changed. You cannot change its children, you cannot change its attributes. If there is any change in the state of an element, then a new element will be created and the earlier element will be destroyed. 

React JS uses virtual DOM to identify, what is the minimum set of elements requiring changes to reflect the state change in the application. So, whenever state of an application changes there are two virtual DOM trees into picture. One is the current DOM tree and another one is the DOM tree which reflects the state changes. As we already know that DOM is a tree of objects. In React JS it will be the tree of elements being rendered. The algorithm to identify the minimum number of operations to transform one tree into another will have a complexity of order of O(n<sup>3</sup>) where n being the number of elements in the tree. Clearly it is not the most efficient way to identify the operations required to transform one tree to another. There must be a better way.

React JS uses Diffing algorithm to compute the operations required to transform one tree into another. Diffing algorithm works on heuristics approach. Heuristic literally means learn by discovering things themselves and learning from own experiences. Based on the learning, experiences and recommendations, Diffing algorithm has certain assumptions and the most important ones are listed below -

1. If two elements are of different types they will produce different trees. There is no need to compare those. React JS simply tear down the old tree and build the new tree from scratch in this case. Let's take an example from React [official site](https://reactjs.org/docs/reconciliation.html), when diffing the following:
...
``` 
<div>
  <Counter />
</div>
<span>
  <Counter />
</span> 
```
`Counter ` will be destroyed and recreated. This is because the root element for `Counter` is different and React will assume that it make different element trees. 

2. When diffing React DOM elements of the same type, if there is only change of attributes among the DOM elements, then Diffing algorithm we keep the underlying DOM node and will only change the attribute. For example from the [official site](https://reactjs.org/docs/reconciliation.html), Diffing the below: 
...
```
<div style={{color: 'red', fontWeight: 'bold'}} />
<div style={{color: 'green', fontWeight: 'bold'}} /> 
``` 
React will only update the color style. The underlying DOM node will be untouched. 

3. React recommends to use `key` attribute for the children of a DOM node. It increases the efficiency of Diffing algorithm with great extent. Let's see an example again from the [official site](https://reactjs.org/docs/reconciliation.html) 
Let's assume that there is a React element with the following structure:
```
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```
In case a child element is inserted at the beginning of React element's DOM node without the key, then React will need to mutate every child element instead of realizing that it can keep some of the child elements without even modifying them. 
``` 
<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul> 
``` 
Using key attribute with the child elements solve this problem. For example, if the React element has keys for its child elements like: 
``` 
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```
And there is another child element inserted in the beginning of a React element like:
```
<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul> 
``` 
Then the Diffing algorithm will easily be able to determine that it can keep the elements with the key 2015 and 2016 and just need to add another element with the key 2014. This improves the performance of the Diffing quite substantially. 

So, these were the few assumptions &  recommendations for the Diffing algorithm. As we already said that Diffing algorithm works on the heuristic approach and it is the learning that React team has, to improve the performance further. There will be more observations and recommendations from React team to improve the Diffing algorithm further. 

To conclude: 

>Diffing is an algorithm that is based on the heuristic approach. React team has some observations, recommendations and these are all utilized in Diffing algorithm to efficiently determine the operations required to transform one tree into another.
