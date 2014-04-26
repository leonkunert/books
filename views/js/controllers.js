'use strict';
// Declare app level module which depends on and services
angular.module('book.controllers', [])

.controller('overviewCtrl', function($scope, bookFactory) {
    bookFactory.getBooks()
        .success(function (data) {
            $scope.books = data;
        });
})

.controller('addCtrl', function($scope, $location, bookFactory){
    $scope.save = function () {
        bookFactory.addBook($scope.book)
            .success(function (data) {
                $location.path('/');
            });
    }
})

.controller('editCtrl', function($scope, bookFactory, $routeParams){
    bookFactory.getBook($routeParams.bookId)
        .success(function (data) {
            $scope.book = data;
        });
});