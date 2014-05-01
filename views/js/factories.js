'use strict';
// Factory Module
angular.module('book.factories', [])

.factory('bookFactory', function($http){
    var factory = {};

    factory.getBooks = function () {
        return $http.get('/v0/book');
    };

    factory.getBook = function (_id) {
        return $http.get('/v0/book/'+_id);
    };

    factory.updateBook = function (data) {
        return $http.put('/v0/book/'+data._id, data);
    }

    factory.addBook = function (data) {
        return $http.post('/v0/book', data);
    }

    factory.deleteBook = function (data) {
        return $http.post('/v0/book/'+_id, data);
    }

    return factory;
});
