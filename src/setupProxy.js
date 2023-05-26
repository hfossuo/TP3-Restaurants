const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/restaurants',
        createProxyMiddleware({
            target: 'http://localhost:5000', // Replace with your server's URL
            changeOrigin: true,
        })
    );
};
