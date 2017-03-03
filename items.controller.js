(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

// Version with resolving to 1 item based on $stateParams in route config
ItemController.$inject = ['$stateParams', 'myData'];
function ItemController($stateParams, myData) {
  var itemDetail = this;
  var item = items[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.short_name = item.short_name;
  itemDetail.description = item.description;
}

})();