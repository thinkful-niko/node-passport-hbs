const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Formation = new Schema({
    name: String,
    author: String,
    date: String
    //add additional formation info later
});

module.exports = mongoose.model('formations', Formation);
