//The movies service nees to use AngularJS's built in $http to fetch JSON from the server
app.factory('discover', ['$http', function($http) {
//Inside movies we use $http to construct an HTTP GET request for the movie data
  return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=d01aaf921cffcbd45e9d7c5d32d82776')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
}]);
