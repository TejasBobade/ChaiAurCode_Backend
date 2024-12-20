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

const githubData = {
    "login": "TejasBobade",
    "id": 91044252,
    "node_id": "MDQ6VXNlcjkxMDQ0MjUy",
    "avatar_url": "https://avatars.githubusercontent.com/u/91044252?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/TejasBobade",
    "html_url": "https://github.com/TejasBobade",
    "followers_url": "https://api.github.com/users/TejasBobade/followers",
    "following_url": "https://api.github.com/users/TejasBobade/following{/other_user}",
    "gists_url": "https://api.github.com/users/TejasBobade/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/TejasBobade/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/TejasBobade/subscriptions",
    "organizations_url": "https://api.github.com/users/TejasBobade/orgs",
    "repos_url": "https://api.github.com/users/TejasBobade/repos",
    "events_url": "https://api.github.com/users/TejasBobade/events{/privacy}",
    "received_events_url": "https://api.github.com/users/TejasBobade/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 1,
    "following": 3,
    "created_at": "2021-09-20T04:34:41Z",
    "updated_at": "2024-12-04T03:26:56Z"
  }

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

app.get('/github', (req,res) => {
    res.json(githubData)
})

// Power to listen is also comes from app -> because app is created using express and has all express functionality
// app use listen method -> has port and call back
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})