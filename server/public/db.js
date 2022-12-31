const mongoose = require('mongoose')

const calendar = new mongoose.Schema({
    event: String,
    location: String,
    date: Date,
    start_time: String,
    end_time: String,
    timezone: String
})


const users = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
})


const Calendar = mongoose.model('Calendar', calendar)
const Users = mongoose.model("Users", users)


exports.Calendar = Calendar
exports.Users = Users