'use strict';

var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'angularMoment']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/home');

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');

  $stateProvider.state('home', {
    url:'/Angular-Laravel-CRUD/angular/',
    templateUrl: 'Angular-Laravel-CRUD/angular/partials/home.html',
    controller: 'QuoteController'
  }).state('edit-quote', {
    url: '/Angular-Laravel-CRUD/angular/quote/:id',
    templateUrl: 'Angular-Laravel-CRUD/angular/partials/edit-quote.html',
    controller: 'EditQuoteController'
  });

}).run(function($state){
  $state.go('home');
});
