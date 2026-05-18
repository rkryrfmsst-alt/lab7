require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const express = require('express');
const { resolve } = require('path');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');

const app = express();
const port = process.env.PORT || 3010;

const cors = require('cors');

app.use(express.static('static'));

app.use(cors());
app.use(express.json());

app.use('/api/users', UserController);
app.use('/api/login', LoginController);

app.listen(port, () => {
    console.log('process.env ', process.env);
    console.log(`App listening at http://localhost:${port}`);
});