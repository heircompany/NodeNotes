const express = require('express');
const app = express();
const moment = require('moment');
const PORT = process.env.PORT || 3000;

const people = [
    {
        name: "joe grotto"
    },
    {
        name: "joey grotto"
    },
    {
        name: "joseph grotto"
    },
    {
        name: "grotts"
    }
];

// dynamically serve static files
app.use('/assets', express.static(__dirname + '/public'));

// ejs template engine
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {serverPeople: people});
});

app.listen(PORT, () => {
    console.log(moment().format("ddd, hA") + `: Application Launched on Port:${PORT}.`);
});
