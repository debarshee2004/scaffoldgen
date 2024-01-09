const express = require("express")
const passport = require("passport")
const expressSession = require("express-session")
const users = require('./model')
const { config } = require("dotenv")

const app = express()

// For configuring .env file
config({ path: './.env' })
// For accessing auth.js file
require('./auth')

// For handling CORS errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:5173");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,token');
    res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// For express session middleware
app.use(expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
// Initializing passport
app.use(passport.initialize());
// Passport session middleware
app.use(passport.session());

// For checking user is authenticated or not
const isAuthencticated = (req, res, next) => {
    const user = req.user
    console.log(user)
    if (!user) {
        return res.status(400).json({ message: 'user not logged in', success: false })
    }
    next()
}

// Home route
app.get('/', (req, res) => {
    res.send("Working")
})

// For google auth API
app.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));


// Route for failure to authenticate
app.get('/auth/google/failure', (req, res) => {
    res.send("User not registered")
})

// Callback route for authentication 
app.get('/oauth/google/redirect',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:5173',
        failureRedirect: 'http://localhost:5173/error'
    })
);

// Route for getting use data
app.get('/login/user', isAuthencticated, (req, res) => {
    // console.log("Request",req.user)
    res.status(200).json({ success: true, user: req.user })
})

// Route for log out
app.get('/logout/user', (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return res.status(400).json({ success: false })
        }
    });

    return res.status(200).json({ success: true, message: 'logged out' })
})

module.exports = app