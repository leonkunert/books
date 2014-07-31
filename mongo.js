var mongoose = require('mongoose');
mongoose.connect('mongodb://10.0.0.6/books');

module.exports = mongoose;
