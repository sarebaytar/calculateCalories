angular.module('calc').service('incrementId', function() {
    let i = 0;
    return function () {
      return i++;
    };
});
