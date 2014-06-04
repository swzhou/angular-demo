'use strict';
/* Controllers */

angular.module('myApp.controllers', ['ui.bootstrap'])
    .controller('MyCtrl1', ['$scope', '$modal', function ($scope, $modal) {
        $scope.open = function () {
            $modal.open({
                templateUrl: 'partials/dialog.html',
                controller: CreateSthController,
                backdrop: true
            }).result.then(function () {

            });
        };
    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {}]);

    var CreateSthController =  function ($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
