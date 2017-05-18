(function(){

  var app = angular.module('calc', []);

  var clients = [];

  app.controller('CalcController', function(){
    this.clients = clients;

    this.client = {};

    this.addClient = function() {
      this.client.result = this.result();
      this.client.id = this.incrementId();
      clients.push(this.client);
      this.client = {};
    };

    this.result = function(){
      if (this.female) {
        return Math.round(655.1 + 9.563 * this.client.weight + 1.85 * this.client.height - 4.676 * this.client.age);
      } else {
        return Math.round(66.5 + 13.75 * this.client.weight + 5.003 * this.client.height - 6.775 * this.client.age);
      }
    };

    var index = 1;
    this.incrementId = function(){
      return index++;
    };

    /*this.addClient = function(){
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
