const express = require('express')
const swaggerUi = require('swagger-ui-express');

var options = {
    swaggerOptions: {
        url: 'openapi.yaml'
    }
}

const app = express()
app.use(express.static('openapi'))
app.use('/', swaggerUi.serve, swaggerUi.setup(null, options));
app.listen(8772, "127.0.0.1")

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(8223, "127.0.0.1", function () {
    console.log('Running CORS Anywhere');
});