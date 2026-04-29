const express = require('express');

const adminRouter = express.Router();

// router-level middleware 
adminRouter.use((req, res, next) => {
    console.log("Admin router middleware")
    next ();
});


// route 
adminRouter.get("/dashboard", (req, res) => {
    res.send("Admin Dashboard");
});

module.exports = adminRouter;