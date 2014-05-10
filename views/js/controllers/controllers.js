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
    $scope.multiOptions = {
        placeholder: "Tags auswählen...",
        dataTextField: "titel",
        dataValueField: "titel",
        autoBind: false,
        dataSource: {
            type: "json",
            transport: {
                read: {
                    url: "/v0/tags",
                }
            }
        }
    };
    $scope.saveBook = function () {
        bookFactory.addBook($scope.book)
            .success(function (data) {
                $location.path('/');
            });
    };
    $scope.saveTag = function () {
        if ($scope.tag.titel !== '') {
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
    $scope.multiOptions = {
        placeholder: "Tags auswählen...",
        dataTextField: "titel",
        dataValueField: "titel",
        autoBind: false,
        dataSource: {
            type: "json",
            transport: {
                read: {
                    url: "/v0/tags",
                }
            }
        }
    };
    $scope.saveTag = function () {
        if ($scope.tag.titel !== '') {
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
