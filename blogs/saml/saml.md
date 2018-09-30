---
date: "2018-09-30"
title: "What is SAML, and why it is used? SSO and Fedrated Identity."
series: "SAML"
keywords: "SAML, SSO,Fedrated Identity"
category: "Technical"
---

SAML stands for Security Assertion Markup Language. It is a standard XML based Framework for describing and exchanging security related information multiple parties. So, why do we need to exchange security related information? Single sign-on and federated identity management are two of the most important use cases where SAML plays a vital role. In both use cases if user is authenticated by one party then the user should not be required to be authenticating again. So, there should be a way to communicate the security related information between the parties and that is where SAML plays a vital role. 

The systems which claims to support the single sign-on typically rely on the browser based cookies to maintain the authentication related information. The problem arises when the two parties involved in single sign-on are having different domains. The information in cookies from one domain will never be available to another domain, therefore, to support multi-domain single sign-on there should be some way to pass the authentication information between the domains. SAML provides a standard, vendor independent rules and protocol for transmitting information between the domains.

Federated identity comes into picture when online services want to establish a collaborative working environment for the mutual users. Hence, the importance for understanding the syntax and semantics for information exchanges is very important and to establish this common understanding for exchange of information SAML is used. Online services will have local identities for the users. So for example, if two online services are participating in identity Federation for a user each of them will have its own local identity of the user. These local identities must be linked with the federated identity, this process of linking is called as `Account Linking`. 

For example let's assume that there is a online service provider for house rental. A user Peter, has an account with the house rental service provider with the username has peter123. Now suppose house rental provider has an identity agreement with a car rental provider. Peter has an account with the car rental provider as well with the email ID peter@xyz.com. Both the service providers are having local identities for the user Peter. To be able to have federated identities for their user "Peter" both the service providers should agree on a federated identity and link their local identity to the federated identity. So the process will be something like this: 

- Peter opens the house rental portal in his Browser and logs in with its local identity i.e peter123. Peter usage the house rental portal and find  link for the car rental portal. 
- Peter Clicks on the link to go to the car rental portal. The car rental for provider acknowledges that Peter is already logged in with its partner's portal (House rental portal). 
- Since Peter has come first time car rental portal after authenticating with the house rental portal hence, there is no federated identity established between house and car rental portal for Peter as of now. 
- Peter will be asked to authenticate himself again in the car rental portal and there will be a federated identity established between house and car rental portal. Let's say the federated identity is fd-iden-123. 
- Both the car and house rent portal will perform account linking to link the local identities to the federated identity. 
- Next time, Peter is authenticated with the house rental portal, and invokes car rental portal from housing portal then Peter will not be required to authenticate himself again and vice versa.
- The communication between the parties who are participating in implementing the federated identities for the users happens through the SAML.

So to conclude, we can understand that SAML is a standard set of rules and protocols in order to communicate the security information between multiple parties for agreeing for single sign-on or Federated  identities. There should be a standard way to link the local identities with the federal identities (Account linking) and the communication, and that is where SAML comes into picture.




