require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const tableService = require('../services/TableService');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    tableService._get(process.env.USER_TABLE_ID, '')
        .then(records => res.json(records.data))
});

router.get('/current', (req, res) => {
    const { recordId } = req.query;
    console.log('recordId:', recordId);

    if (!recordId) {
        return res.status(400).json({ message: 'recordId не передан' });
    }

    tableService._get(process.env.USER_TABLE_ID, `?filterByFormula={UserId}=${recordId}`)
        .then(record => {
            console.log(JSON.stringify(record.data, null, 2));
            res.status(200).json({ message: 'Успешно', user: record.data })
        })
        .catch((err) => {
            console.log('err:', err.response?.data);
            res.status(400).json({ message: 'Пользователь не найден' })
        })
});

module.exports = router;