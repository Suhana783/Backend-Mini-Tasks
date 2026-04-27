const express = require('express');

const app = express();

app.use(express.json());

const users = [
    {id:1, "name":"Payal", "age":20},
    {id:2, "name":"Shama", "age":25},
    {id:3, "name":"Adi", "age":30}
]


// Get All Users 
app.get('/users', (req, res) => {

    res.json(users);
});


// Create User 
app.post('/user', (req, res) => {
const createUser = req.body
    if (createUser.name && createUser.age) {

       createUser.id = users.length+1
       users.push(createUser)

        res.json({
            message : "User created successfully",
            data : createUser
        }) 
    } else {
            res.send("Name and age are mandatory")
        }
});


// Update User 

app.put('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id) 
    const {name, age} = req.body;

    const user = users.find(u => u.id === userId);

    if(!user) {
        return res.send("User not found");
    }

    if (name) user.name = name;
    if (age) user.age = age;

    res.json(user);
 });


//  Delete User 
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.send("User not found");
    }

    const deletedUser = users.splice(index, 1);

    res.json(deletedUser);
});

module.exports = app;