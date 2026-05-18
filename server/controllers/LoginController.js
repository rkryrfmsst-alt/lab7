require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const tableService = require('../services/TableService');
const express = require('express');

const router = express.Router();

router.get('/auth', (req, res) => {
    const { email, password } = req.query;

    if (!email || !password) {
        return res.status(400).json({ message: 'Не заполнены обязательные поля' });
    }

    console.log(email, password);

    tableService._get(process.env.LOGIN_TABLE_ID, `?filterByFormula=AND({Email}='${email}', {Password}='${password}')`)
        .then(records => {
            const data = records.data.records;
            console.log('login fields:', data[0]?.fields);
            if (!data || data.length == 0) {
                res.status(400).json({ message: 'Пользователь не найден', userId: 0 });
            } else {
                res.status(200).json({ message: 'Успешная авторизация', userId: data[0].fields.LoginId });
            }
        })
});

module.exports = router;