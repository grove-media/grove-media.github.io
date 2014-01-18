angular.module('app', ['ngRoute'])

.config(['$routePtovider', function ($routePtovider) {
  $routePtovider.otherwise({redirectTo: '/'});
}])

.controller('AppCtrl', function ($scope) {
  $scope.tooltipIsVisible = false;
  
  $scope.toogleTooltip = function (item) {
    $(item).css('top:' + $(item).css('top')).css('left', $(item).css('left'));
    $scope.tooltipIsVisible = true;
  };
});