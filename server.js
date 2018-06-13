const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api.router');
const siteRouter = require('./routes/site.router');

const sitePort = 3000;  //TODO: get ports from config
const apiPort = 8080;  

const siteApp = express();
const apiApp = express();

/* configure and start api server */

// configure app to use bodyParser()
apiApp.use(bodyParser.urlencoded({ extended: true }));
apiApp.use(bodyParser.json());

// all of our api routes will be prefixed with /api
apiApp.use('/api', apiRouter);

// configure error handler
apiApp.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ success: false, message: err });
})

// configure 404 handler
apiApp.use((req, res, next) => {
    res.status(404).send('Sorry, not found.')
})

apiApp.listen(apiPort, () => {
    console.log(`API magic happens on port ${apiPort}, on environment '${process.env.NODE_ENV}'.`);
});

/* configure and start site server */
siteRouter.app.prepare().then(() => {
    siteApp.use(siteRouter.handler)

    siteApp.listen(sitePort, () => {
        console.log(`Site magic happens on port ${sitePort}, on environment '${process.env.NODE_ENV}'.`);
    });
})

