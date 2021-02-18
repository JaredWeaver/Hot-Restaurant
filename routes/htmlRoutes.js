const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public', '/home.html')));

router.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public', '/tables.html')));

router.get('/waitlist', (req, res) => res.sendFile(path.join(__dirname, '../public', '/reserve.html')));

module.exports = router;
