const entities = require("entities");

module.exports = function (app, Module) {

    // Route to serve to client
    app.get('/', function (req, res) {
        console.log('Serving root');
        res.sendFile('static/index.html', { root: __dirname }); // Send file to browser
    });
}
