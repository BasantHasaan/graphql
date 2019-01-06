const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookSchema = new Schema({
    name: String,
    genre: String
})

module.exports = mongoose.model('Book',bookSchema)