(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'Templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
