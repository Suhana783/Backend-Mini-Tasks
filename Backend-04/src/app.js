const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    if (req.body.username === "admin") {
        next ()
    } else {
        res.send("access denied")
    }
});



app.post('/user', middleware ,routeHandler, (req, res) => {
    
    const receivedData = req.body;

    res.json ({
        message : "User created",
        data : receivedData
    })
});




module.exports = app;