var mongoose = require('./mongo.js');

var book = mongoose.model('book',
    {
        type        : String,
        titel       : String,
        regal       : String,
        nr          : String,
        illustrator : String,
        text        : String,
        druckdatum  : String,
        auflage     : String,
        typ         : String,
        tags        : Array,
        created_at  : Date
    }
);

module.exports = book;
