const router = require('express').Router();
const tableData = require('../data/tableData.js');
const waitlistData = require('../data/waitlistData.js');


router.get('/api/tables', (req, res) => res.json(tableData));

router.get('/api/waitlist', (req, res) => res.json(waitlistData));

router.post('/api/tables', (req, res) => {
    const newRes = req.body;
    
    if (tableData.length < 5) {
        console.log(tableData)
        tableData.push(newRes);
        console.log('post', tableData);
        res.json(true);
    } else {
        waitlistData.push(newRes);
        res.json(false);
    }


});


module.exports = router;