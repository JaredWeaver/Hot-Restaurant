const router = require('express').Router();
const path = require('path');
const tablesData = require('../data/tableData.js');
const waitlistData = require('../data/waitlistData.js');

router.get('/api/waitlist', (req, res) => res.json(waitlistData));

router.get('/api/tables', (req, res) => res.json(tablesData));


router.post('/api/waitlist', (req, res) => {

});

router.post('/api/tables', (req, res) => {

});

module.exports = router;