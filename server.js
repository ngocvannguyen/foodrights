// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var nodemailer = require('nodemailer'); //Send Email

// configuration =================
app.use(express.static(__dirname + '/dist'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ======================================================================
// api ---------------------------------------------------------------------
// get all todos
app.get('/api/todos', function(req, res) {
        res.json("Todo"); // return all todos in JSON format
});

// listen (start app with node server.js) ======================================
// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('./dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

//Send Email
app.post('/api/email', function(req, res) {
    console.log(req.body);
    var mailOptions = {
        to : req.body.from,
        subject : req.body.subject,
        text : req.body.message
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

/*
 Here we are configuring our SMTP Server details.
 STMP is mail server which is responsible for sending and recieving email.
 */
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "ngoc.van.nguyen@gmail.com",
        pass: ""
    }
});

app.listen(8080);
console.log("App listening on port 8080");
