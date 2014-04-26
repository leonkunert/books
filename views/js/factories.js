'use strict';
// Factory Module
angular.module('book.factories', [])

.factory('bookFactory', function($http){
    var factory = {};

    factory.getBooks = function () {
        return $http.get('/v0/book');
    };

    factory.getBook = function (bookId) {
        return $http.get('/v0/book/'+bookId);
    };

    factory.addBook = function (data) {
        return $http.post('/v0/book/create', data);
    }

    return factory;
});