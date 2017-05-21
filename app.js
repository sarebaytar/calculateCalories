(function(){

  var app = angular.module('calc', []);

  app.controller('CalcController', function($scope, incrementId){

    this.clients = [];

    this.id = incrementId.id();

    this.client = {};

    this.addClient = function() {
      this.client.result = this.calculateResult();
      //this.client.id = this.incrementId();
      this.clients.push(this.client);
      this.client = {};
      console.log(this.id);
    };

    this.calculateResult = function(){
      if (this.female) {
        return Math.round(655.1 + 9.563 * this.client.weight + 1.85 * this.client.height - 4.676 * this.client.age);
      } else {
        return Math.round(66.5 + 13.75 * this.client.weight + 5.003 * this.client.height - 6.775 * this.client.age);
      }
    };

    /*var index = 1;
    this.incrementId = function(){
      return index++;
    };

    this.addClient = function(){
      clients.push({
        id: this.incrementId(),
        name: this.newName,
        weight: this.newWeight,
        height: this.newHeight,
        age: this.newAge,
        result: this.result()
      });

      this.newName = '';
      this.newWeight = '';
      this.newHeight = '';
      this.newAge = '';
    };*/

  });

})();
