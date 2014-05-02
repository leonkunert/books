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
    tagFactory.getTags()
        .success(function (data) {
            console.log(data[0].tags);
            $scope.tags = data[0].tags;
        });
    $scope.saveBook = function () {
        bookFactory.addBook($scope.book)
            .success(function (data) {
                $location.path('/');
            });
    };
    $scope.saveTag = function () {
        tagFactory.addTag($scope.tag)
            .success(function (data) {
                $scope.tags.push($scope.tag.titel);
                $scope.tag = {};
            });
    };
    $scope.change = function (e) {
        console.log(e);
    };
})

.controller('editCtrl', function($scope, $location, $routeParams, bookFactory, tagFactory) {
    bookFactory.getBook($routeParams._id)
        .success(function (data) {
            $scope.book = data;
        });
    tagFactory.getTags()
        .success(function (data) {
            console.log(data[0].tags);
            $scope.tags = data[0].tags;
        });
    $scope.saveTag = function () {
        tagFactory.addTag($scope.tag)
            .success(function (data) {
                $scope.tags.push($scope.tag.titel);
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
