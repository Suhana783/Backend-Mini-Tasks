const express = require('express');
const app = express();

app.use(express.json());

// Home route 
app.get('/', (req, res) => {
    res.send("Welcome to my server");
});


// Profile route 
app.get ('/profile', (req, res) => {
    res.json ({

        "name": "Your Name",
        "role": "Backend Learner"
    })
});


// Products route 
app.get ('/products', (req, res) => {

    res.json ([
        {"name" : "noodles", "id" : "123"},
        {"name" : "pasta", "id" : "000"},
        {"name" : "coke", "id" : "345"}
    ]);
});


// Login route 
app.post ('/login', (req, res) => {
    const userData = req.body;
    if (userData.username === "admin" && userData.password === "1234") {
        res.json({message :"Successfully loggedIn"})

    } else {
        res.json({message : "Invalid Credentials" });
    }

});

module.exports = app;