const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello Ray');
});

const users = [
    { id: 1, name: 'enan', email: 'enan@gmail.com' },
    { id: 2, name: 'joy', email: 'joy@gmail.com' },
    { id: 3, name: 'azad', email: 'azad@gmail.com' },
    { id: 4, name: 'sami', email: 'sami@gmail.com' },
    { id: 5, name: 'karim', email: 'karim@gmail.com' },
    { id: 6, name: 'koby', email: 'koby@gmail.com' },
    { id: 7, name: 'brian', email: 'brian@gmail.com' },
];

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    console.log('req', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/user/:userId', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = user.find(u => u.id == id);
    res.send(user)
})

app.listen(port, () => {
    console.log('I want to say something very important')
});