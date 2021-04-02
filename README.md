# GraphQL Tutorial
The repository hosts the code base for my [GraphQL](https://graphql.org/) tutorial, using [Apollo](https://www.apollographql.com/). Follow along or skip parts by switching branches.

I created a tutorial for learning GraphQL, since I had a difficult time finding a good guide in teaching about the technology. My personal goal was not only to learn GraphQL, but to set up the basic structure of a back-end server with [JWT](https://jwt.io/) authentication. 

This tutorial will differ from others since I will also focus on having a clean structure within my project instead of collecting everything within one file. There are multiple tutorials where you can find a "Quickstart" way of setting up a GraphQL back-end, but very few focused on the actual structure of the project. 

Lastly, this tutorial will be in [TypeScript](https://www.typescriptlang.org/), since I personally prefer it over JavaScript. This is probably because I am mostly used to Object-oriented programming in C#, where I have access to concepts like types, interfaces and data binding.  

I won't be going through why you should use GraphQL, since you probably already set your mind on learning about it already. 

## Part 1 - Setting up

In order to run our GraphQL server we will need to run it with [Node.js](https://nodejs.org/en/). If you have ever worked with [PHP](https://www.php.net/) you will know what Node.js is. 

Since we will be coding in TypeScript, we need to compile our code in order to run it. Our setup will include automatic change detection, to allow us to instantly test out our changes and some basic scripts to allow us to quickly start up our server. 

## Part 2 - Hello World

Now that we have a running code base, we can begin on the fun stuff. In this part we will setup a basic "Hello World" application, which will allow us to verify that everything works. This will also act as an introduction to GraphQL queries. 

## Part 3 - Structuring our project

With a Hello World in place, I am already getting frustrated with how the application is organized. Limiting ourselves to one file is not an option and only extracting the schemas and datasources will also get difficult to manage over time. So now we are fixing that!

## Part 4 - Data Source

A GraphQL back-end is only an abstraction layer, used to expose certain CRUD operations or functions of your back-end database/services. The actual logic is usually somewhere else, which means that we need to connect the two to fully test out GraphQL's functionalities. In my tutorial we will connect a MySQL database, but if there is any interest, I might add other data sources in the future. 

In order to have anything to connect to I will start up a database using Docker, but you could do this however you want. I will also use PHPMyAdmin in order to create the tables that I want. 

## Part 5 - Authentication

Finally, the most boring and important part. This is probably the reason I created the tutorial in the first place. I am going to try and make the authentication of the API as simple and clear as possible. I will explain it as I have understood and hopefully this ends up being easy to follow. 