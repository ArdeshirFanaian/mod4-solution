(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['MenuDataService', 'myData'];
function MenuAppController(MenuDataService, myData) {
  var mainData = this;
  mainData.myData = myData;

  var promise = MenuDataService.getAllCategories();
      promise.then(function (response){
        mainData.categories = response.data;
        console.log(mainData.categories);
      })
      .catch(function(error) {
        console.log("Error");
      });

      mainData.logMenuItems = function (categoryShortName) {
        var promise = MenuDataService.getItemsForCategory(categoryShortName);

        promise.then(function (response) {
          mainData.items = response.data.menu_items;
          console.log(mainData.items);
        })
        .catch(function (error) {
          console.log(error);
        })

      };
}
})();
