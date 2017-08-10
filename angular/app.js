'use strict';

var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'angularMoment']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/home');

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');

  $stateProvider.state('home', {
    url:'crm/Angular-Laravel-CRUD/angular/',
    templateUrl: 'crm/Angular-Laravel-CRUD/angular/partials/home.html',
    controller: 'QuoteController'
  }).state('edit-quote', {
    url: 'crm/Angular-Laravel-CRUD/angular/quote/:id',
    templateUrl: 'crm/Angular-Laravel-CRUD/angular/partials/edit-quote.html',
    controller: 'EditQuoteController'
  });

}).run(function($state){
  $state.go('home');
});
