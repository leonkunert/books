'use strict';
// Declare app level module which depends on and services
angular.module('book.controllers', [])

.controller('overviewCtrl', function($scope, bookFactory) {
    bookFactory.getBooks()
        .success(function (data) {
            $scope.books = data;
        });
})

.controller('addCtrl', function($scope, $location, bookFactory, tagFactory) {
    $scope.saveBook = function () {
        bookFactory.addBook($scope.book)
            .success(function (data) {
                $location.path('/');
            });
    };
    $scope.saveTag = function () {
        tagFactory.addTag($scope.tag)
            .success(function (data) {
                $scope.tag = {};
            });
    };
    $scope.change = function (e) {
        console.log(e);
    };
})

.controller('editCtrl', function($scope, bookFactory, $location, $routeParams) {
    bookFactory.getBook($routeParams._id)
        .success(function (data) {
            $scope.book = data;
        });
    $scope.saveTag = function () {
        tagFactory.addTag($scope.tag)
            .success(function (data) {
                $scope.tag = {};
            });
    };
    $scope.saveBook = function () {
        bookFactory.updateBook($scope.book)
            .success(function (data) {
                $location.path('/');
            });
    };
});
