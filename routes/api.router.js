const express = require('express');

// sub-routes imports
const apiRoutes = require('./api.routes');

const router = express.Router();

// use sub routes
router.use('/', apiRoutes);

module.exports = router;