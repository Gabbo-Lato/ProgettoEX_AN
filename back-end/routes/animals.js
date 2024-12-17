const express = require('express');
const router = express.Router();
const animalsData = require('../data/animals.json');

// Rotta per ottenere la lista di animali
router.get('/', (req, res) => {
    res.json(animalsData);
});

module.exports = router;
