import express from "express";  // module js 

const app = express();


// app.get('/', (req,res) => {
//     res.send("server is ready")
// });

// get a list of five jokes 

// ther are some standard we have to follow to write route ex. '/api/jokes' we will see best way in future
app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'This is a fifth joke'
        }
    ];

    res.send(jokes)
});

// This is required
// Take a port from environment variable if you don't get from there give hard coded value
// But in production it is necessary to get port from env else app could not run
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})