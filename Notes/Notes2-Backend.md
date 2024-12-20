# 00:29:19 Connect Backend with frontend

- Download the node js -> https://nodejs.org/en
- Go to terminal -> node -v / node --version
- Download npm -> https://www.npmjs.com/package/download
- Go to command prompt -> npm install download
- Go in command prompt -> npm -v

# Converte a Computer/Mobile into Server
- > Cumputer/Mobile -> Server 
- We should be able to send request to server and able to get replay from server 
- For this we are going to use to packages 1. Express 2. Mongoose
- Express -> Handles the send and recived request -> send request- replay request

- > Express -> Server
- When we go to any website ex. postman.com there is a server which is listening when we send request it will send the response to that request in this case it is https://www.postman.com/ 
- when you go some where ex. postman.com -> It's called Home Route(/)
- ex. /login : login setup
- get request -> Most of time we do this request in browser
- We are going to work on get request

# How to create empty node application - 38:51 
- open a folder in vs code 
- open terminal -> npm init 
- It's an utility -> This utility will walk you through creating a package.json file.
- package name -> chaibackend
- version: (1.0.0)
- description: a basic app to deploy
- entry point: (index.js)
- test command:         
- git repository:
- keywords: node chai    
- author: tejas bobade 

# After creation of package.json
- create a index.js file -> because we choose it as entry point
- we can run index.js using -> node index.js
- But how to run it using package.json -> Go to package.json -> scripts ->
 "scripts": {
    "start": "node index.js"
  } 
  -> npm run start

# To start with backend we need expressjs
- https://expressjs.com/
- Express -> Fast, unopinionated, minimalist web framework for Node.js
- How to install -> npm install express
- chack if it install properlly -> inside package.json -> dependencies ->
"dependencies": {
    "express": "^4.21.2"
  }

# Basic express server creation
- we go to express https://expressjs.com/ and there we get inside hello world code for express learn how it works -> for explanation go to -> index.js
- we run the app using -> npm run start
- It will run continouslly and listen -> we created a server
- To see the app go to browser -> localhost:3000 (port that you give ex. 3000, 4000 etc.) 
- You will get the result for "/" route  
- we can also go for different route using -> localhost:3000/twitter -> get resulr for twitter -> you can create any number of route using this for ref see -> index.js
- we have to re-start app each time we do some changes -> There is solution for it

# How to deploy the app
- When we have to deploy an application we need to take care of soemthings
- We have to take care of special variable
- Ther are some sesitive information database password , user login etc. it should not be directlly available 
- In your computer the port number 3000 is free doesn't mean it's free in somebody else computer it may be busy

- 1. We have to install dot env -> https://www.npmjs.com/package/dotenv
- terminal -> npm i dotenv
- create new file -> .env
- Add the thing you need to add -> ex. PORT=3000
- inside index.js -> 
first set up the below 
As early as possible in your application, import and configure dotenv:
1. require('dotenv').config()
then whenever we need to use it ex. 
2. process.env.PORT

2. How to deploy in production
- you can deploy anywhere ex. AWS , Azure , Google ,Digital Ocean , Heroku , railway , seenode , render , cyclic
- They are paid now so we will just follow along
- 1:00:12 
- First send repo to github
- If you github is not configured -> https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/GitHub-SSH-Windows-Example
- Create a .gitignore file and add 
node_modules
.env

- >  Go to digital ocean -> https://www.digitalocean.com/
- create -> Apps -> create Resource from source code (Github) -> Repositery (ChaiAurCode_Backend) -> Branch (main) -> Source Directory -> / -> Next
- Resource -> Edite plain -> Basic -> Price $5
- Environment variable -> Global,ChaiAurCode_Backend -> keys (PORT) -> Values (3000) -> next
- info -> Next
- Review -> Create Resources

- Build log

- Action -> destroy app (to remove the app)