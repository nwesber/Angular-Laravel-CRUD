app.controller('QuoteController', function($scope, $http, $state){

  /* Get All */
  $http({
    method: 'GET',
    url: 'http://localhost/Angular-Laravel-CRUD/api/public/api/quotes'
  }).then(function successCallback(response) {
    $scope.quotes = response.data.quote;
  }, function errorCallback(response) {

  });

  /* Add Quote */
  $scope.addQuote = function(){
    var data = {
      "content": $scope.content
    }
    $http.post("http://localhost/Angular-Laravel-CRUD/api/public/api/quote", data).then(function successCallback(response) {
      $state.reload();
    });
  }

  /* Delete Quote */
  $scope.deleteQuote = function(id){
    $http({
      method: 'DELETE',
      url: 'http://localhost/Angular-Laravel-CRUD/api/public/api/quote/' + id
    }).then(function successCallback(response) {
      $state.reload();
    }, function errorCallback(response) {

    });
  }

}).controller('EditQuoteController', function($scope, $state, $stateParams, $http){

  /* Show Quote */
  var id = $stateParams.id;
  $scope.state = $state.current
  $scope.params = $stateParams;

  $http({
      method: 'GET',
      url: 'http://localhost/Angular-Laravel-CRUD/api/public/api/quote/' + id
    }).then(function successCallback(response) {
      $scope.content = response.data.quote.content;
      $scope.id = response.data.quote.id;

    }, function errorCallback(response) {

  });


  /* Update Quote */
  $scope.updateQuote = function(){
    var id = $scope.id;
    var url = 'http://localhost/Angular-Laravel-CRUD/api/public/api/quote/' + id;
    var data = {
      "content": $scope.content
    }

    $http.put(url, data).then(function successCallback(response) {
      $state.go('home');
    });

  }

});
