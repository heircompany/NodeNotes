const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
module.exports = function(app) {
    app.get('/api/person/:id', function(req, res) {
        // get some data from DB
        res.json({firstname: "Joey", lastname: "Grotto"});
    });

    app.post('/api/person', jsonParser, function(req, res) {
        // add some data to DB
    })

    app.delete('/api/person/:id', function(req, res) {
        // delete some data from DB
    });
}
