// index.js    server for the delta zeta website
const express = require("express")
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require("body-parser")
const port = process.env.PORT || 5000
const cors = require("cors")
const mongoose = require('mongoose')
const CONNECTION_URI = process.env.CONNECTION_URI


// Middleware
app.use(cors())
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(express.json())
app.use(express.static(__dirname + "/public")); 
app.use(express.urlencoded({ extended: true }))


// creates a method for all strings that will remove existing brackets (< > ... )
String.prototype.escape = function() {
    var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return this.replace(/[&<>]/g, function(tag) {
        return tagsToReplace[tag] || tag;
    });
};

// Database Setup
mongoose.set("strictQuery", true);
mongoose.connect(CONNECTION_URI)
    .then(() => {
        app.listen(port, () => {console.log(`Server running on port ${port}`)})
    })
    .catch((err) => {
        console.log(err.message)
    })

const CalendarSchema = require('./public/db')
const Calendar = CalendarSchema.Calendar;

/*
const input = Calendar({
    event: "Initiation",
    date: "2023-01-01",
    start_time: "1:00am",
    end_time: "6:00am",
    timezone: "PST"
})

input.save()
*/

app.get("/calendar", (req, res) => {
    Calendar.find({}).exec()
        .then((data) => {res.json(data)})
        .catch((err) => {res.send(err.message)})
})



