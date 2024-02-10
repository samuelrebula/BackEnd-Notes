const express = require('express');
const routes = express.Router();

const vetor = [
    {
        id: 0,
        name: "Albert", 
    },
    {
        id: 1,
        name: "Klaus", 
    },
    {
        id: 2,
        name: "Leon", 
    },
    {
        id: 3,
        name: "Arthur Leon", 
    },
    {
        id: 4,
        name: "Otto", 
    },
    {
        id: 5,
        name: "Hans", 
    },
    {
        id: 6,
        name: "Baldur", 
    },
]

routes.get('/users', (req, res) => {
    const query = req.query;
    console.log(query);

    res.status(200).json(vetor);
});

routes.post('/users', (req, res) => {
    const newUser = req.body;

    vetor.push(newUser);

    res.status(200).json({ message: "Success" });
});

routes.put('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const newFields = req.body;

    let selectedIndex;
    let selected = vetor.find((user, index) => {
        selectedIndex = index;
        return user.id === userId;
    });
    selected = {...selected, ...newFields};

    vetor[selectedIndex] = selected;

    res.status(200).json({ message: "Success" });
});

routes.post('/home', (req, res) => {
    console.log(req);
    res.status(200).send('oi');
});

module.exports = routes;