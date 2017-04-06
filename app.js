const express = require('express');
const app = express();
const moment = require('moment');
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');
const PORT = process.env.PORT || 3000;

// dynamically serve static files
app.use('/assets', express.static(__dirname + '/public'));

// ejs template engine for server code
app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
// setup controller & seed data
setupController(app);
apiController(app);

app.listen(PORT, () => {
    console.log(moment().format("ddd, hA") + `: Application Launched on Port:${PORT}.`);
});
