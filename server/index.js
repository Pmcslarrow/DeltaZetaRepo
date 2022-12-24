// index.js    server for the delta zeta website
const express = require("express")
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require("body-parser")
const limiter = require("express-rate-limit")
const port = process.env.PORT || 5000
const cors = require("cors")
const mongoose = require('mongoose')
const helmet = require('helmet')
session = require('express-session')
const CONNECTION_URI = process.env.CONNECTION_URI

const app = express()
// Middleware
app.use(cors())
app.use(bodyParser.json()) // {limit: "30mb", extended:true}  
app.use(express.json())
app.use(express.static(__dirname + "/public")); 
app.use(express.urlencoded({ extended: true })) // Middleware allows POST requests to show form fields in req.body
app.use(helmet());


// Defines the rate limiter
const registerLimiter = limiter({
    windowMs: 10000,
    max: 5,
})


// Database Setup
mongoose.set("strictQuery", true);
mongoose.connect(CONNECTION_URI)
    .then(() => {
        app.listen(port, () => {console.log(`Server running on port ${port}`)})
    })
    .catch((err) => {
        console.log(err.message)
    })

const Database = require('./public/db')
const Calendar = Database.Calendar;
const Users = Database.Users;


var crypto = require('crypto');
function validateUserLogin(userJson, password, callback)
{
    const hash = crypto.createHash('sha256')
    const attemptedPassword = hash.update(password).digest('hex')
    const actualPassword = userJson.Password

    if (attemptedPassword === actualPassword)
    {
        callback.send({status: "Success"})
    } else {
        callback.send({status: "Failure"})
    }

}



app.post("/api/login", registerLimiter, (req, res) => {
    const EMAIL = req.body.email
    const PASSWORD = req.body.password
    
    Users.findOne({Email: EMAIL}, function (err, result) {
        if (err) {
            console.log(err.message) 
            return null
        } else {
            if (result !== null) { validateUserLogin(result, PASSWORD, res) }
            else{
                res.status(404).end("Failed")
            }
        }
    })
    
})


app.get("/api/databaseUsers", registerLimiter,(req, res) => {
    Users.find({}).exec()
        .then((data) => {res.json(data)})
        .catch((err) => {res.send(err.message)})
})

app.post("/api/databaseUsers", (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const password = req.body.pass
    Users.find({ Email: email}).exec()
        .then((data) => {
            if (Object.keys(data).length === 0)
            {
                Users.insertMany({ Name: name, Email: email, Password: password })
                res.status(200).end("Added a new user")
            } else {
                res.end("Invalid email")
            }
        })
})

app.delete("/api/databaseUsers/delete", (req, res) => {
    const user_id = req.body.userData
    Users.deleteOne({ _id : user_id})
        .then((data) => {res.status(200).end("User Deleted")})
        .catch((err) => res.status(404).end(err.message))
})



app.get("/api/calendar", registerLimiter, (req, res) => {
    Calendar.find({}).exec()
        .then((data) => {res.json(data)})
        .catch((err) => {res.send(err.message)})
})



