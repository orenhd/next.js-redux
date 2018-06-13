const nextRoutes = require('next-routes');

const routes = nextRoutes();
 
routes
.add('clicing-exmaple')
.add('top-twenty', '/top-twenty/:genreId')

module.exports = routes;