'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
  $scope.units = [
    {symbol: 'AUD', name: 'Australian Dollar'},    
    {symbol: 'USD', name: 'US Dollar'},
    {symbol: 'CAD', name: 'Canadian Dollar'},
    {symbol: 'BOS', name: 'Bosnia-Herzegovina Convertible Mark'}    
  ];
  $scope.fromUnit = $scope.units[0];
  $scope.toUnit = $scope.units[1];
  
  $scope.from = 1;
  $scope.to = 0.78;    
});