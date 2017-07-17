/* 
 * Node Server App Copyright Robert Flach 2017
 */

// Get dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');


// Get API Routes

const api = require('./server/routes/api');
const app = express();

// POST data parsers

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'aksdjfkajsodkfjaoskdfjoaskdfj',
    resave: false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
var Account = require('./server/models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
mongoose.connect('mongodb://worldbuilders:worldbuilders@localhost/worldbuilders');
// Point static path to dist
app.use(express.static(path.join(__dirname,'dist')));

// set api routes
app.use('/api', api);
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port',port);

// Let's serve it up
const server = http.createServer(app);
server.listen(port,()=>console.log(`API running on localhost:${port}`));

