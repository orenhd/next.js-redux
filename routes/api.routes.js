const express = require('express');

const router = express.Router();

// define routes
router.get('/', (req, res, next) => {
    res.status(200).json({ success: true, message: 'hooray! welcome to our api!' });   
});

module.exports = router;