var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var book = require('./book.js');
var tag = require('./tag.js');

app.engine('jade', require('jade').__express);

/* Body Parser for POST and PUT */
app.use(bodyParser());

/* Static Fileserver */
app.use(express.static(__dirname + '/views'));

/*
 ** Files **
 */

app.get('/partials/:name', function (req, res) {
    res.render(req.params.name+'.jade');
});

/*
 ** API **
 */

app.route('/v0/book/:bookId')
.get(function (req, res) {
    book.findOne({_id:req.params.bookId}, function (err, result) {
        res.json(result);
    });
})
.put(function (req, res) {
    book.findOneAndUpdate({_id:req.body._id}, req.body, function (err, result) {
        res.json(result)
    });
})
.delete(function (req, res) {
    book.findOneAndRemove({_id:req.body._id}, function (err, result) {
        res.json(result);
    });
});

app.route('/v0/book')
.get(function (req, res) {
    book.find(req.query, function (err, result) {
        res.json(result);
    });
})
.post(function (req, res) {
    var _book = new book(req.body);
    _book.type = 'book';
    _book.save(function (err, result) {
        res.json(result);
    });
});

app.route('/v0/tags')
.get(function (req, res) {
    tag.aggregate([
        {
            $group : {
                _id: '$type',
                tags: { $addToSet: "$titel" }
            }
        }
    ]).exec(function (err, result) {
        console.log(result);
        res.json(result);
    });
})
.post(function (req, res) {
    var _tag = new tag(req.body);
    _tag.type = 'tag';
    _tag.save(function (err, result) {
        res.json(result);
    });
});

/*
 * Catch everything Angular is doing Routing on the Frontend
 */
app.get('*', function (req, res) {
    res.render('index.jade');
});

app.listen(3212);
