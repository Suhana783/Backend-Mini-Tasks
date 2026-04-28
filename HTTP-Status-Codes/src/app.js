const express = require('express');

const app = express ();

app.use(express.json());

const users = [
    {id : 1, "name" : "Palak", "age" : 20},
    {id : 2, "name" : "Amit", "age" : 25},
    {id : 3, "name" : "Maya", "age" : 30}
]


// Get all users 
app.get('/users', (req, res) => {
    
    if (users.length > 0) {
        res.status(200).json({
            message : "Users successfully fetched",
            data : users
        })
    } else {
        res.status(204).send();
    }
 
});


// Return single user by id
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (user) {
        res.status(200).json ({
            message : "User is found",
            data : user
        });
    } else {
        res.status(404).send("User not found")
    }
});


// Create a new user 
app.post('/users', (req, res) => {
    const {name, age} = req.body; 

    if(!name || !age) {
        return res.status(400).send("Name and age are mandatory");
    } 

    const newUser = {
        id : users.length + 1,
        name,
        age
    };

    users.push(newUser);

    res.status(201).json({
        message : "User created successfully",
        data : newUser
    });
});


// Update a user 
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const {name, age} = req.body;
    const user = users.find(u => u.id === userId);

    if(!user) {
        return res.status(404).send('user not found')
    }

    if (!name && !age) {
        return res.status(400).send("No data provided to update");
    }

    if (name !== undefined) user.name = name;
    if (age !== undefined) user.age = age;

    res.status(200).json({
        message : "User updated successfully",
        data : user
    })

})


// Delete the user by id

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).send("User not found");
    }

    const deletedUser = users.splice(index, 1);

    res.status(200).json({
        message: "User deleted successfully",
        data: deletedUser
    });
})


module.exports = app