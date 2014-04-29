var mongoose = require('./mongo.js');

var tag = mongoose.model('tag',
    {
        type  : String,
        titel : String,
    }
);

module.exports = tag;
