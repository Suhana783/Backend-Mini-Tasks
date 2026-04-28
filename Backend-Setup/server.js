const express = require('express');
const app = require ('./src/app.js');

app.listen(3000, () => {
    console.log("Server is running successfully")
});