(function () {
'use strict';

angular.module('MenuApp')
.component('menuApp', {
  templateUrl: 'Templates/menuapp.template.html',
  bindings: {
    items: '<'
  }
});

})();
