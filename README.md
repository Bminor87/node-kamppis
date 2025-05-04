```
Ohjelmistokehityksen teknologioita - Seminaarityö

Node Kämppis

NodeJS/Express/Typescript REST API verrattuna Spring Bootiin ja Laraveliin

Tekijä: Jesse Hellman
```

---

[🎦 Video Presentation (in finnish)](https://hellmanstudios.fi/kamppis-app.mp4)

# 1. Introduction

This is a partial remake of our [Kamppis App](https://github.com/HH-Nat20/kamppis-server) backend which was made with Spring Boot / Kotlin.
The purpose of this work is to compare the workflow and performance of Node / Express.js with other web backend frameworks I have previously used.

## Express vs Spring Boot vs Laravel

I have used Laravel and PHP for countless projects before starting at Haaga-Helia University of Applied Sciences. Even though I haven't used it in a while,
I'd say that's the framework I'm most well versed in.

Lately I've also gained some experience in Spring Boot, because that's the backend framework they use to teach at Haaga-Helia.

Although I'd probably say Javascript is my strongest language (because I've used it a lot doing front end development), I have never tried creating anything with Node.js. As Express is the go-to framework for Node.js Back End development, that's what I'll use in this project.

## Process

The planned steps for this experiment are as follows:

1. Learn the basics of getting an **Express.js** app up and running
2. Install the necessary dependencies, such as **Typescript** support and **Dockerize** the app
3. Recreate a few endpoints so they work like the original **Kämppis App** Spring Boot backend
4. Reflect on the process of building a REST API and compare it to the former experiences with other frameworks (Laravel, Spring Boot)
5. Study and analyze already made comparisons found online
6. See how Express compares with the other two back end frameworks

# 2. Used Technologies

## 2.1 Node.js

I began by looking for a quick start tutorial on how to get started with NodeJS and Express.js. I was expecting to find an installer that creates the boilerplate for my Node.js project, much like Spring Boot or Laravel.

To my surprise, I was instructed to only write a single Javascript file, which was also very short:

```js
// Load HTTP module
const http = require("http")

const hostname = "127.0.0.1"
const port = 8000

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "text/plain" })

  // Send the response body "Hello World"
  res.end("Hello World\n")
})

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

Now I could start my server by simply typing

```sh
node filename
```

This is a plain Node.js example. Express comes later in the tutorial.

The server was up and running in no time - no waiting to compile like in Spring Boot. Getting Laravel up and running is faster than Spring Boot, but here Node.js takes the cake. What about Express.js then?

## 2.2 Express.js

The tutorial was a bit lacking so I had to find another one from expressjs.com ([2](#resources)).

The previous tutorial failed to mention that I need to initialize the express app with `npm init` and also run `npm install express`. The expressjs.com tutorial brought me to the right track.

This was now familiar territory as I've made apps with React and React Native which use npm packages. I felt excitement to realize I could do my backend with the same technologies I've done my front end projects with.

Now I was able to make a fully working express app:

```js
const express = require("express")
const app = express()
const port = 3000

app.get("/", function (req, res) {
  res.send("Hello World!")
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
```

That looks even simpler than the plain Node.js version. So so far this was the process:

1. Write the above code in a file like `express-hello.js`
2. Run `npm init` and answer the questions the initialization wizard asks
3. Run `npm install express` to add express as a dependency.
4. Run `node express-hello` to get the server up and running

I liked the simplicity so far.

This was only a simple Hello World -page so we can't jump to any conclusions yet. My goal was to try something real - Trying some endpoints we had in our Kamppis App server.

I hardly knew enough of using express to move straight to building something useful, so I continued with the tutorials in expressjs.com. They introduced me to something awesome:

```sh
npx express-generator
```

Running that on my work direcotry generated me some files and folders as boilerplate. Now my express project folder looks much like a Laravel or Spring Boot project!

The generator added a script to my package.json so now I could run my project with

```sh
npm start
```

It started so fast I was waiting for some more logs to appear on the screen before I realized I could already enter my web page on the browser.

Looking at the files it was easy to see how routing worked, so I gave it a test and created a file `test.js` inside the routes folder.

```js
var express = require("express")
var router = express.Router()

router.get("/", function (req, res, next) {
  res.send("This is a test")
})

module.exports = router
```

Then I added these lines to `app.js`

```js
var testRouter = require("./routes/test") // to the imports

app.use("/test", testRouter) // after the other routes
```

I was sure it would work immediately, but it didn't. I had to restart the server, and then it worked. No big deal!

I went on to learn more about express using resources online and artificial intelligence (ChatGPT) for though questions.

One thing I really liked while learning with trial and error, was to notice how the error messages in the console, although not perfect, were much clearer than those Java gives us. It made debugging much faster.

## 2.3 Docker

As this was not a Docker learning experience, I asked chatGPT to write me a Dockerfile and docker-compose.yml which would work for my project. I set the docker-compose to have the project build on one container, and MongoDB on another.

## 2.4 Typescript

Although Typescript is a relatively new technology for me, it has become a lifeline in the last year. I just couldn't revert back to vanilla Javascript after having done 2 large projects this year using Typescript. I need the type safety!

### 2.4.1 Initializing Typescript

I had to look for a tutorial ([8](#resources)) on how to add Typescript on my project, as the React and React Native projects I did before gave me Typescript support without any manual configuration.

Setting up Typescript on an Express.js project is relatively simple. The shortest version is this:

```bash
npm init -y
npm install -D typescript ts-node @types/node @types/express
npx tsc --init
```

This already complicates the process of getting Express up and running from the initial example, but it got much worse...

### 2.4.2 Headaches with CommonJS

I couldn't help but feel my entire codebase was outdated, as express-generator made the app using CommonJS and not the more modern ES Javascript. It used require instead of import in most cases, and var instead of const. My IDE gave me yellow warnings all over the place because of this.

So I tried to transform my code from CommonJS to ES2020/ESNext with the help of the internet and AI (Github copilot & ChatGPT). Even with all this help it seemed to take me forever to get every complaint from my IDE removed.

I felt like I would've got this backend working in Spring Boot or Laravel ages ago. The excitement I got from the beginning, when I thought I was able to get a backend using my favorite language up and running so fast, faded away and I was second guessing my choice to start learning NodeJS.

With plain Javascript the app would've been finished earlier, but I wasn't going to revert back to vanilla after getting used to the power of Typescript. Now the image I have for setting up a solid nodejs/express backend is that it is pretty daunting and needs a lot of manual setup. I will probably start my next Express project using something like [this boilerplate](https://github.com/w3cj/express-api-starter-ts/tree/main), which instructs to start building an Express API like this:

```sh
npx create-express-api --typescript --directory my-api-name
```

I did get the typescript errors away finally and my server was now fully working with ESNExt instead of CommonJS. I had to do all the following:

- I had to add some type declarations on some files
- I had to remove all require statements and change them to imports - some didn't work by plainly switching the syntax.
- I needed to figure out how to make `__filename` and `__dirname` to work as they apparently only worked with CommonJS. I failed this and just removed them as they were related to the view engine which I would not be using in a REST API.
- I received multiple different errors on server start and had to figure them out one by one.
- I had to install **tsup** ([11](#resources)) and change my package.json scripts accordingly because this made getting the server working much simpler.

So yeah... definitely using that `create-express-api` next time - or Laravel!

## 2.5 MongoDB and Mongoose

I realized I needed to set up a database connection to be able to do anything useful. So I read about MongoDB ([9](#resources)) and Mongoose ([10](#resources)) and applied what I learned on my models and started writing my controllers.

I decided I would remake the following Kämppis App -endpoints:

- User (Because everything depends on it)
- UserProfile (Arguably the most important endpoint in our app)
- ProfilePhoto (I wanted to try image uploading - it was relatively difficult in Spring Boot)

Mongoose is an ORM library which makes it easier to talk with the MongoDB database in a Node/Express app. I had never tried MongoDB before and I wanted to have this experience, and I was immediately sold on Mongoose. The logic felt very familiar as I had written similar Schemas for our front end validation in our Kämppis App.

Routes were pretty easy to do, as the route file for users was already generated by express-generator. I just filled it up with my own endpoints. I moved the logic to separate controller files as per the logrocket tutorial ([8](#resources)).

Writing these models, controllers and routes were the easiest part, as it was mostly just writing good old Javascript (or Typescript if you will).

## 2.6 Image uploads

I ran out of time

# 3. Analysis

Now I will compare Express.js with Spring Boot (and sometimes Laravel) to see if I should use it in my future projects in their stead.

## 3.1 Ease of setup

⭐⭐⭐

Although it's incredibly fast to get the simplest backend up and running, as soon as you need something like Typescript, it gets much more complicated.

Sure, if you have set an Express project many times, it may come as second nature to get it all going, but for a newcomer like me, it feels very daunting and I feel like running back to the arms of my old friend PHP.

## 3.2 Coding simplicity

⭐⭐⭐⭐

Javascript is not everyone's favorite language due to some weird ways it handles some things (especially related to scope),
but I'm most familiar with Javascript and I'm not too keen on learning new programming languages.
I mostly write front end, and having a way to write back end with Javascript too is a huge blessing.

So yes, I'm very biased, but let's also look at this more objectively.

In the users endpoint, our kotlin back end had a total of **565** lines of code in **4** files, whereas my code in Express
had only **130** lines of code in **3** files.

To be fair - there is a bit of extra functionality in the users endpoint on the original Kämppis App, but definitely not worth **4** times as much code!

Seems like I'm not an edge case either, as I found this story online:

> PayPal famously built a Java version and a Node.js version of their account overview “application” in parallel. They found that…
> Two months into the Java development, two engineers started working on the parallel node.js app. In early June they met at a crossroads, the applications had the same set of functionality; the node.js application, a smaller team with a two month delayed start, had quickly caught up. A few details stood out after we ran the test cases and both applications passed the same functional tests. The node.js app was:
> Built almost twice as fast with fewer people
> Written in 33% fewer lines of code
> Constructed with 40% fewer files

Source: [Sajad Asadi, medium.com](https://medium.com/@lvlr.xaus/express-js-vs-java-spring-vs-php-laravel-fe74a68828b3)

That being said, Spring Boot seems to come a bit more with "batteries included". There are robust dependencies available such as spring security, which are very reliable in any project. Even though the `npm` library is huge, it's hard to find packages you can rely on as well as you can rely on Spring Boot dependencies.

Seems to me Express needs a lot more manual setup when the scale of your app grows.

## 3.3 Community and libraries

⭐⭐⭐⭐⭐

There's a huge library of packages thanks to the Node.js community. The Node Package Manager is an endless sea of quality modules to choose from, and in most cases we can find a module we need instead of reinventing the wheel.

Also as Express is based on Javascript, which is the [most popular programming language](https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/), it is very easy to find help for any problems one might face when developing using **Express.js**.

According to [this source](https://medium.com/@lvlr.xaus/express-js-vs-java-spring-vs-php-laravel-fe74a68828b3), Node has **700,000** questions in StackOverflow and JavaScript has **1,700,000** questions.

Compare that to Laravel's **105,700** questions and PHP's **1,200,000** questions, or Spring's **140,000** questions and Java's **1,500,000** questions.

## 3.4 Performance

⭐⭐⭐

Making big projects on all frameworks to compare their performance is beyond the scope of this work.
Luckily we have the internet, where people have already made these comparisons already.

At least according to [this source](https://medium.com/deno-the-complete-reference/express-vs-springboot-hello-world-performance-comparison-dd066bf53858), Spring Boot's responses are faster than Node's, but Node uses less CPU and RAM. Here are some pictures from that page:

![Image](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Qqe3aoSDNjkPDwP7yFT8Ww.png)

![Image](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*G8NulwtGeYa9OtEaksrF_g.png)

![Image](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dp6SKtQTQxhE0mak7ApuOQ.png)

So although Spring seems to be much faster than Node, It seems you can cut server costs drastically when using Node.

---

There would probably be much more to compare, such as scalability, testing, error handling etc. but I simply ran out of time.

# 4. Conclusion

I have mixed feelings about writing REST API's with Node and Express. On one hand, I love the fact that I can use the same languages and packages on both my front end and back end. On the other hand, I don't really want to go through the experience of setting up everything I need to get started with my back end project.

Unless the `create-express-api` is kept up-to-date, or similar services become available, I will likely choose Laravel for my next back end project, as long as I have any say in the technologies being used.

Here's a summary of pros and cons on each of these 3 frameworks.

### 4.1 Laravel

<details>
  <summary>Pros</summary>

- Really easy to set up authentication
- Robust ORM
- Clean syntax
- Very good documentation!
- A production server is very easy to set up
- Wide community and good libraries (Composer)
- Awesome CLI (Artisan) for easy control
</details>

<details>
  <summary>Cons</summary>
  
  + Weak type safety
  + Slower than Spring or Node
  + PHP sucks :D
</details>

### 4.2 Spring Boot

<details>
  <summary>Pros</summary>

- Excellent Type safety
- Good performance (in terms of speed)
- Solid dependencies
</details>

<details>
  <summary>Cons</summary>
  
  + Verbose code
  + Learning curve was a bit steep if I remember
  + High CPU and memory usage
  + Slow to startup, slow to code
</details>

### 4.3 Express.js

<details>
  <summary>Pros</summary>

- Easiest and fastest to set up
- Same language than the front end
- Massive NPM ecosystem
- Lightweight and CPU/RAM efficient
</details>

<details>
  <summary>Cons</summary>
  
  + Type safety only if you're willing to go through [hell](#242-headaches-with-commonjs)
  + Can be difficult to maintain if gets large (structurally)
  + A lot of things need to be added manually
  + No built in tools for security (like Laravel Auth and Spring Security)
</details>

---

So, should we have made Kämppis App with Express instead of Spring Boot?

Perhaps - it would have been faster top develop in the end, even if the initial setup had given us headaches. Then again - I fear the app would have slowed down a bit if the backend used Express instead of Spring.

If we publish the app and it gets many users, then it might be a different question, as we would have to consider the server costs. In the end, using Express would have probably been more profitable.

# 5. Recommendations

This is mostly just for me, if I want to start another REST API project using Express and MongoDB.
If `create-express-api` ([12](#resources)) seems outdated or you can't find an equivalent,
these are the step by step instructions on how to get that project started:

1. Set up the project

```bash
mkdir new-api
cd new-api
npm init -y
```

2. Install dependencies

```bash
npm install express mongoose dotenv
npm install -D typescript ts-node tsup @types/node @types/express
```

3. Initialize Typescript

```bash
npx tsc --init
```

4. Create the folder structure

```bash
mkdir src
touch src/server.ts
```

`src/server.ts`

```ts
import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/", (_req, res) => {
  res.send("Hello from Express + TypeScript!")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
```

5. Add these scripts to `package.json`

```json
"scripts": {
  "dev": "tsup --watch --onSuccess 'node dist/server.js'",
  "build": "tsup",
  "start": "node dist/server.js"
}
```

6. Run the server

```bash
# Dev mode with auto reloading
npm run dev

# Manual build and run
npm run build
npm start
```

... OR I could just use a MERN stack template like this one:

https://github.com/BenElferink/mern-template/tree/main

# Resources

1. [Express/Node introduction (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)

2. [Express.js vs Java Spring vs PHP Laravel by Sajad Asadi](https://medium.com/@lvlr.xaus/express-js-vs-java-spring-vs-php-laravel-fe74a68828b3)

3. [Express vs Springboot: Hello world performance comparison](https://medium.com/deno-the-complete-reference/express-vs-springboot-hello-world-performance-comparison-dd066bf53858)

4. [The Good and the Bad of Express.js Web Framework](https://www.altexsoft.com/blog/expressjs-pros-and-cons/)

5. [5 Node.js Advantages and Disadvantages and What They Mean for Your Project](https://www.epam.com/careers/blog/5-node-js-advantages-and-disadvantages-and-what-they-mean-for-your-project)

6. [Laravel vs Node.js: Making the Right Choice (Simplilearn)](https://www.simplilearn.com/laravel-vs-node-js-article)

7. [Hello world example (expressjs.com)](https://expressjs.com/en/starter/hello-world.html)

8. [How to set up Typescript with Node.js and Express (Aman Mittal)](https://blog.logrocket.com/express-typescript-node/)

9. [Building a REST API with Express, Node and MongoDB](https://www.mongodb.com/resources/languages/express-mongodb-rest-api-tutorial)

10. [Getting Started (Mongoose)](https://mongoosejs.com/docs/index.html)

11. [Tsup documentation](https://tsup.egoist.dev/#json-schema-store)

12. [Express API Starter TS](https://github.com/w3cj/express-api-starter-ts/tree/main)
