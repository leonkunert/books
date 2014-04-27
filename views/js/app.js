'use strict';
// Declare app level module which depends on and services
angular.module('book', [
    'kendo.directives',
    'book.controllers',
    'book.factories',
    'ngRoute'
])

// Client-Side Routes
.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {templateUrl: '/partials/overview', controller: 'overviewCtrl'})
        .when('/form', {templateUrl: '/partials/form', controller: 'addCtrl'})
        .when('/edit/:bookId', {templateUrl: '/partials/form', controller: 'editCtrl'})
        // If none of the routes match
        .otherwise({redirectTo: '/partials/overview'});
});
