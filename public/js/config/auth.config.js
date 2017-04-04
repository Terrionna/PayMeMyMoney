(function() {
  angular.module('mymeanblog')
         .run(AuthConfig);

 AuthConfig.$inject = ['UserService', '$location', "$rootScope"];

  function AuthConfig(UserService, $location, $rootScope){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
      if(nextRoute.restriced.access && !UserService.isLoggedin()){
        $location.path('/');
      }
  });
  }
}());
