const express = require('express');
const userRouter = require('./userRouter.js');
const adminRouter = require('./adminRouter.js');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log("Global middleware triggered")
    next ()
});

app.use('/user', userRouter);
app.use('/admin', adminRouter);

module.exports = app;