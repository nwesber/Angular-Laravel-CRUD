var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'angularMoment']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url:'/home',
    templateUrl: 'partials/home.html',
    controller: 'QuoteController'
  }).state('edit-quote', {
    url: '/quote/:id/edit',
    templateUrl: 'partials/edit-quote.html',
    controller: 'EditQuoteController'
  });

}).run(function($state){
  $state.go('home');
});
