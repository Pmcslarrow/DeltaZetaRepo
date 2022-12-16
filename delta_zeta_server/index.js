// index.js    server for the delta zeta website
const express = require("express")
const app = express()
const port = process.env.PORT || 3033
const cors = require("cors")
const pool = require("./public/scripts/db")


// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + "/public")); 


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


// ROUTING      yyyy-mm-dd
//pool.query("INSERT INTO userdata (created, name, age, position, email, password) VALUES ('2022-05-20', 'Paul McSlarrow', 20, 'None', 'pmcslarrow@icloud.com', 'none')")





/*
STEPS

    1) React Router
    2) Serve webpages
    3) Create database on AWS
    4) Connect it to the server

*/
app.listen(port, () => {
    console.log("Server running on port 3033")
})