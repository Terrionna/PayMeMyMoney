(function() {
  angular.module('mymeanblog')
       .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var base = '/posts';
    function getAll(){
    return $http.get(base)
                .then(function(response){
                  console.log(response);
                });
    }
  function getOne(id){
    var url = '${base}'
  }
  }
}());
