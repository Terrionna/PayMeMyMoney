(function (){
  angular.module('paymemymoney')
        .config(RouterConfig);

RouterConfig.$inject = ['$routeProvider'];

function RouterConfig($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'SignupController',
    templateUrl: 'html/views/signup.html',
    css: 'css/signup.css',
    restricted: {
          access: false
    }
  })
  .when('/login',{
    controller: 'LoginController',
    templateUrl: 'html/views/login.html',
    css: 'css/login.css',
    restricted: {
      access: false
    }
  })
  .when('/dashboard', {
    controller: 'DashboardController',
    templateUrl: 'html/views/dashboard.html',
    css: 'css/dashboard.css',
    restricted: {
      access: true
    }
  })
  .when('/create', {
    controller: 'CreateController',
    templateUrl: 'html/views/create.html',
    css: 'css/create.css',
    restricted: {
      access: true
    }
  })
  .when('/edit/:postId', {
    controller: 'EditController',
    templateUrl: 'html/views/edit.html',
    css: 'css/edit.css',
    restricted: {
      access: true
    }
  })
  .otherwise({
    redirectTo: '/',
    css: 'css/signup.css',
    restricted: {
      access: false
    }
  });
 }
}());
