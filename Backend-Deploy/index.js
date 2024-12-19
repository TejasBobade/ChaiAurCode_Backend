// As early as possible in your application, import and configure dotenv:
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

// import express from "express" // We can use this syntax as well for below syntax place
// We aquare all the express dependencies and store it in express variable
const express = require('express')  // require -> module syntax

// Created a variable using express
const app = express()
// We have lot of ports inside our computer there are some free ports ex. 3000 , 4000
const port = 3000

// get request -> listen at - '/' -> If there any request here we will give -> call back
// In call back we have -> req(request) and res(response) -> we will send res using send
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create one get request
app.get('/twitter',(req,res) => {
    res.send("This is twitter of tejasbobade")
})

// Ther is something called hot reloading if you used react -> when you save the file entier backend get reloaded automatically -> the data get processed 
// But to get back the data we need to process it again
// we have problem here we does not get "/login" 
// to solve it stop the app and run it again -> we have to re-start app each time we do some changes -> There is solution for it
app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code </h1>')
})

app.get('/chai', (req,res) => {
    res.send('<h1><b>This is the chai aur code app</b></h1>')
})

// Power to listen is also comes from app -> because app is created using express and has all express functionality
// app use listen method -> has port and call back
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})