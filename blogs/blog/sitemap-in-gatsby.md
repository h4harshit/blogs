---
date: "2018-10-01"
title: "Adding sitemap in Gatsby"
series: "Gatsby"
keywords: "Gatsby, Sitemap"
category: "Technical"
---

When you are building a site, you would want that search engines like Google, to crawl your site intelligently. You enable a crawler by providing a sitemap file. A sitemap file provides information about the pages, videos & other files on your site, that you think are important. It becomes increasingly important to provide a sitemap if your site is new or having a very rich content. It is not mandatory for you to have a sitemap file for your website, nevertheless it doesn't harm to have a sitemap file. It only increases the chances of having proper indexing of your site. 
Let us see how to generate a sitemap in Gatsby. There is a Gatsby plugin available to generate the sitemap file. The plugin is "gatsby-plugin-sitemap". First you will need to install the plugin using the following command: 

```
npm install gatsby-plugin-sitemap --save 
``` 

After the plugin is installed you will need to configure it in "gatsby-config.js" file. Following is the minimum configuration required for generating sitemap of your Gatsby site using "gatsby-plugin-sitemap" plugin. 

``` 
module.exports = {
  siteMetadata: {
    title: 'title for your site',
    siteUrl: "https://your-site.com/",
  },
  plugins: [
    'gatsby-plugin-sitemap'
  ]
}

```
Please change title and site URL in the above code snippet to reflect details about your site. You will need to generate a production build to test sitemap. Use the following command to generate a production build and start the server. 

``` 
gatsby build && gatsby serve
```
You can access sitemap of your site with the following URL: 

``` 
https://your-site.com/sitemap.xml 
``` 
Again, don't forget to change the URL to reflect your site. 
