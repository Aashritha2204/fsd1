const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());

let users = [];

app.post('/users', (req, res) => {
    const { name, email } = req.body;

   
    if (!name || !email) {
        return res.status(400).json({ message: "Name and Email are required" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;

    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[userIndex] = { id: userId, name, email };
    res.status(200).json(users[userIndex]);
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(userIndex, 1);
    res.status(200).json(deletedUser);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});