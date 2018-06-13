const next = require('next');
const siteRoutes = require('./site.routes');

exports.app = next({dev: process.env.NODE_ENV !== 'production'});
exports.handler = siteRoutes.getRequestHandler(exports.app);