const express = require('express');

const app = express ()
// app.use(express.json());

app.get('/', (req, res)=> {
    res.send("Welcome to my server")
})


app.get('/about', (req, res) => {
    res.send("This is about page")
})

app.get('/contact', (req, res) => {
    res.json(
       {"name" : "Maya" ,
        "email" : "maya1232@gmail"
       }
    )
});


app.post('/login', (req, res) => {
    res.send(req.body)
});


module.exports = app;