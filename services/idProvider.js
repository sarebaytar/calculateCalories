angular.module('calc').service('incrementId', function() {
    let i = 0;
    this.id = function () {
      return i++
    };
});
