(function() {
  angular.module('paymemymoney')
         .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', 'UserService'];

  function SignupController($scope, UserService){
    $scope.newUser = {};
    $scope.signup = signup;

    function signup(user){
      UserService.signup(user)
                  .then(function(response){
                    $scope.newUser = {};
                    $location.path('/login');
                  })
                  .catch(function(err){
                    console.log(err);
                    $scope.newUser.password = '';
                  });
    }
  }
}());
