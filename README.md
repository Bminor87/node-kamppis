# Node Kamppis

This is a partial remake of our [Kamppis App](https://github.com/HH-Nat20/kamppis-server) backend which was made with Spring Boot / Kotlin.
The purpose of this work is to compare the workflow and performance of Node / Express.js to web backend frameworks I have previously used.

## Express vs Spring Boot vs Laravel

I have used Laravel and PHP for countless projects before starting at Haaga-Helia University of Applied Sciences. Even though I haven't used it in a while,
I'd say that's the framework I'm most well versed in.

Lately I've also gained some experience in Spring Boot, because that's the backend framework they use to teach at Haaga-Helia.

Although I'd probably say Javascript is my strongest language, because I've used it a lot doing front end development, I have never tried creating anything with

## Process

### Getting started

I began by looking for a quick start tutorial on how to get started with NodeJS and Express.js. I was expecting to find an installer that creates the boilerplate for my Node.js project, much like Spring Boot or Laravel.

To my surprise, I was instructed to only write a single Javascript file, which was also very short:

```js
// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body "Hello World"
  res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Now I could start my server by simply typing

```sh
node filename
```

This is a plain Node.js example. Express comes later in the tutorial.

The server was up and running in no time - no waiting to compile like in Spring Boot. Getting Laravel up and running is faster than Spring Boot, but here Node.js takes the cake. What about Express.js then?

### Express

The tutorial was a bit lacking so I had to find another one from expressjs.com (2).

The previous tutorial failed to mention that I need to initialize the express app with `npm init` and also run `npm install express`. The expressjs.com tutorial brought me to the right track.

This was now familiar territory as I've made apps with React and React Native which use npm packages. I felt excitement to realize I could do my backend with the same technologies I've done my front end projects with.

Now I was able to make a fully working express app:

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
```

That looks even simpler than the plain Node.js version. So so far this was the process:

1. Write the above code in a file like `express-hello.js`
2. Run `npm init` and answer the questions the initialization wizard asks
3. Run `npm install express` to add express as a dependency.
4. Run `node express-hello` to get the server up and running

I liked the simplicity so far.

### Next step

This was only a simple Hello World -page so we can't jump to any conclusions yet. My next step was to try something real - Trying some real endpoints we had in our Kamppis App server

## Resources

1. [Express/Node introduction (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)

2. [Express.js vs Java Spring vs PHP Laravel by Sajad Asadi](https://medium.com/@lvlr.xaus/express-js-vs-java-spring-vs-php-laravel-fe74a68828b3)

3. [Express vs Springboot: Hello world performance comparison](https://medium.com/deno-the-complete-reference/express-vs-springboot-hello-world-performance-comparison-dd066bf53858)

4. [The Good and the Bad of Express.js Web Framework](https://www.altexsoft.com/blog/expressjs-pros-and-cons/)

5. [5 Node.js Advantages and Disadvantages and What They Mean for Your Project](https://www.epam.com/careers/blog/5-node-js-advantages-and-disadvantages-and-what-they-mean-for-your-project)

6. [Laravel vs Node.js: Making the Right Choice (Simplilearn)](https://www.simplilearn.com/laravel-vs-node-js-article)

7. [Hello world example (expressjs.com)](https://expressjs.com/en/starter/hello-world.html)
