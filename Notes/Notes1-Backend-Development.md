# 00:00:00 How to deploy backend code in production
# Backend Development Roadmap 
- > Server -> Server is just an software -> It is used to serv
- > For backend we need -> Mastery Over one 1. languange 2. Database

1. A Programming language -> Before this you have to have strong base in the 
language you are going to choose for backend development
- Java(Spring) , Js , Php(Laravel) , Golang , C++(Crow) -> On a framework

- > Data process , veryfy-anaylize ,  Enter to database
- > Store data or get the stored data show it

2. Database
- Mongo , MySQL , Postgres , Sqlite -> ORM , ODM

- > Browser , Mobile -> API -> Backend , Backend -> DB (Another Continent)
- We write a backend and servers are continiously active(runing) -> write lot of fu ctions -> You click on /login ot /signup -> we don't detect it the framework ,  labraries in networking detects it -> Which route we are gone and which function should be called its our job -> Major job of ours is to write this functions -> This function interact with DB(Database) -> We send response after this that response is in API format 

# JS Based Backend
- > Js -> Express , Mongoose
- Express -> Mostly used for routing used to build server
- Mongoose -> Database

- > A JavaScript based Backend 
- Data(username , password , string , number etc.) , File(image , pdf , videos etc.) , Third Party(APT)(Google Loging , File upload on AWS , Email etc.)
- A JS Runtime : Node.js / Deno / Bun

### File structure
- Package.json , .env , (Readme , git , lint , prettier etc.)
- >  Src 
- index (DB Connects)  , App (Cong , Cookie) , Constants (enums, DB-name)

- > Directory Structure
-> DB (DB Calls)
-> Models (Database schema / Models / Sturcture)
-> Controllers (Methods / Functions - Take data and process it)
-> Routes (Routing)
-> Middlewares
-> Utils (Mail , file upload etc. - Basic utilities)
-> More (depends)