const express = require('express');
const app = express ();
const studentRoutes = require('./routes/student.route');

app.use (express.json());
app.use('/api/v1/students', studentRoutes);

app.get("/", (req, res) => {
    res.send("API is working")
})


module.exports = app;