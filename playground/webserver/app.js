const express = require('express');
const app = express();
const moment = require('moment');
const htmlController = require('./controllers/htmlcontroller');
const apiController = require('./controllers/apicontroller');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;

// dynamically serve static files
app.use('/assets', express.static(__dirname + '/public'));

// ejs template engine
app.set('view engine', 'ejs');

// middleware checks request URL, logging in console
app.use('/', function(req, res, next) {
    console.log(`Request URL: ${req.url}`);

    const con = msql.createConnection({
        host: 'localhost',
        user: 'test',
        password: 'test',
        database: 'addressbook'
    });

    con.query('SELECT People.ID, Firstname, Lastname, Address FROM People INNER JOIN PersonAddresses ON People.ID = PersonAddresses.PersonID INNER JOIN Addresses ON PersonAddresses.AddressID = Addreses.ID',
        function (err, rows) {
            if(err) throw err;
            console.log(rows[0].Firstname);
            console.log(rows[0].Lastname);
            console.log(rows[0].Address);
        }
    );
    next();
});

htmlController(app);
apiController(app);

app.listen(PORT, () => {
    console.log(moment().format("ddd, hA") + `: Application Launched on Port:${PORT}.`);
});
