const mongoose = require('mongoose')

const calendar = new mongoose.Schema({
    event: String,
    date: Date,
    start_time: String,
    end_time: String,
    timezone: String
})
const Calendar = mongoose.model('Calendar', calendar)







exports.Calendar = Calendar