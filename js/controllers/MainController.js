//In the controller we use the movies service to fetch data from the server
app.controller('MainController', ['$scope', 'discover', function($scope, discover) {
  $scope.title = 'Welcome to the Movie Database';
  $scope.promo = 'We have all of the best movies';
//Use forecast to asynchronously fetch movie data from the server and store it into $scope.lastYear
  discover.success(function(data) {
      $scope.lastYear = data;
  });

  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);
