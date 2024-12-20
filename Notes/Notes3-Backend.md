# 01:19:32 Data Modelling for backend with mongoose
- Create a folder -> Full Stack Basic
- Create folder inside it -> Backend , Frontend
- cd "Full Stack Basic"

- > Backend
- cd backend
- npm init
- npm i express
- create a file server.js
- package.json -> script -> create a start script ->
"scripts": {
    "start": "node server.js"
  }
- set basic set up of express in server.js 
- after runing app we will get error
- to solve it
- package.json -> "type": "module",
- to read the json we can use json formator -> https://jsonformatter.org/

- > Frontend 
- how to cerate application is the hole point on it's own in frontend
- react app -> vite , create react app , parcel -> This are bundlers / toolchain 
- at the end browser unserstand only html , css , js - this boudlers take the code converte it into the code browser understand
- vite -> take all js file together and give it as bundler

- (We can change the name and color of terminal like backend , frontend)

-  npm create vite@latest . -> It will create react vite app . is for do not create new folder in it create inside frontend folder itself
- npm install
- write code on app.jsx

- (how to send api request -> fetch , react query , axios)

- npm i axios -> this library specially made for web request ->  how data is comming , how it will be handled , what is  the situation in case of fail , loading , stop data in middle and add something in it ex. add some api keys
- import axios from 'axios' -> in app.jsx
- after writting code run the app

- we will get CROS error 
- CROS provide safty to your application(cros origin)
- ex. your server is running on different website / origin / port your application some where else it not like anybody can come and take our data if it happens there could be 1000s of request to server and you have to pay the bill 
- that way this problem occurs know as CROS error what it is exactally -> if you URl are different , if your port number is different
- solution -> tell backend devs to whitelist my URL you have to whitelist it along port number , IP Domain whitelist

- > proxy -> we can add proxy using -> https://vite.dev/config/server-options
- Go to vite.config.js -> defineconfig -> 
server: {
    proxy:{
      '/api': 'http://localhost:3000',
    },
  },
- it will appeand the request time it will also give the origin // 1:58:39 / 10:06:52

- > build -> npm run build -> gives dist -> distribution folder 

- > midleware -> app.use(express.static('dist'));
- don't put the frontend in backend 