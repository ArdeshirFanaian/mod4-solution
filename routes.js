(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'Templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'Templates/categories.template.html',
    controller: 'MenuAppController as mainData',
    resolve: {
     myData: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }] 
    }
  })

  .state('mainData.itemDetail', {
    url: '/items/{itemId}',
    templateUrl: 'Templates/items.template.html',
    controller: 'ItemController as itemDetail'
  });
}
})();
