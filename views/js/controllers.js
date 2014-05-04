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
    $scope.tag = {titel:''};
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
        if ($scope.tag.titel != '') {
            tagFactory.addTag($scope.tag)
                .success(function (data) {
                    $scope.tags.push($scope.tag.titel);
                    $scope.tag = {};
                });
        }
    };
})

.controller('editCtrl', function($scope, $location, $routeParams, bookFactory, tagFactory) {
    $scope.tag = {titel:''};
    bookFactory.getBook($routeParams._id)
        .success(function (data) {
            console.log(data);
            $scope.book = data;
        });
    tagFactory.getTags()
        .success(function (data) {
            console.log(data);
            $scope.tags = data;
        });
    $scope.saveTag = function () {
        if ($scope.tag.titel != '') {
            tagFactory.addTag($scope.tag)
                .success(function (data) {
                    $scope.tags.push($scope.tag.titel);
                    $scope.tag = {};
                });
        }
    };
    $scope.saveBook = function () {
        bookFactory.updateBook($scope.book)
            .success(function (data) {
                $location.path('/');
            });
    };
});
