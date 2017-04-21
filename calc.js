(function(){

  var clients = [];

  var app = angular.module('calc', []);

  app.controller('CalcController', function($scope){
    //this.clients = clients;
    $scope.clients = clients;

    $scope.result = function(){
      if ($scope.female) {
        return Math.round(655.1 + 9.563 * $scope.newWeight + 1.85 * $scope.newHeight - 4.676 * $scope.newAge);
      } else {
        return Math.round(66.5 + 13.75 * $scope.newWeight + 5.003 * $scope.newHeight - 6.775 * $scope.newAge);
      }
    };

    var index = 0;
    $scope.incrementId = function(){
      return index += 1;
    };

    $scope.addClient = function(){
      $scope.clients.push({
        id: $scope.incrementId(),
        name: $scope.newName,
        weight: $scope.newWeight,
        height: $scope.newHeight,
        age: $scope.newAge,
        result: $scope.result()
      });

      $scope.newName = '';
      $scope.newWeight = '';
      $scope.newHeight = '';
      $scope.newAge = '';
    };

  });

})();
