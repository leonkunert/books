'use strict';
// Factory Module
angular.module('book.factories', [])

.factory('bookFactory', function($http) {
    return {
        'getBooks': function () {
            return $http.get('/v0/book');
        },

        'getBook': function (_id) {
            $http.get('/v0/book/'+_id);
            return $http.get('/v0/book/'+_id);
        },

        'updateBook': function (data) {
            return $http.put('/v0/book/'+data._id, data);
        },

        'addBook': function (data) {
            return $http.post('/v0/book', data);
        },

        'deleteBook': function (data) {
            return $http.post('/v0/book/'+_id, data);
        }
    };
})

.factory('tagFactory', function ($http) {
    return {
        'getTags': function () {
            return $http.get('/v0/tags');
        },

        'addTag': function (data) {
            return $http.post('/v0/tags', data);
        }
    };
});
