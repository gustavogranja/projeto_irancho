const express = require('express');
const { User } = require('./app/models');

const app = express();

User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(3000);
