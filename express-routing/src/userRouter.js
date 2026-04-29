const express = require('express');

const userRouter = express.Router();

// router-level middleware 
userRouter.use((req, res, next) => {
    console.log("User router middleware");
    next ();
})


// route 
userRouter.get('/profile', (req, res) => {
    res.send("User profile page")
});

module.exports = userRouter;