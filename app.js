var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var book = require('./book.js');

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

app.get('/v0/book', function (req, res) {
    console.log(req.query);
    book.find(req.query, function (err, result) {
        console.log(err);
        console.log(result);
        res.json(result);
    });
});

app.get('/v0/book/:bookId', function (req, res) {
    console.log(req.params);
    book.findOne({_id:req.params.bookId}, function (err, result) {
        console.log(err);
        console.log(result);
        res.json(result);
    });
});

app.post('/v0/book/create', function (req, res) {
    console.log(req.body)
    var _book = new book(req.body);
    _book.save(function (err, result) {
        console.log(err);
        console.log(result);
        res.json(result);
    });
});

app.put('/v0/book/update', function (req, res) {
    console.log(req.body);
    book.findOneAndUpdate({_id:req.body._id}, req.body, function (err, result) {
        console.log(err);
        console.log(result);
        res.json(result)
    });
});


app.get('*', function (req, res) {
    res.render('index.jade');
});

app.listen(3212);
