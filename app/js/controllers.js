'use strict';
/* Controllers */

angular.module('myApp.controllers', ['ui.bootstrap'])
    .controller('MyCtrl1', ['$scope', '$modal', function ($scope, $modal) {
        $scope.items = ['item1', 'item2', 'item3'];
        $scope.open = function () {
            $modal.open({
                templateUrl: 'partials/dialog.html',
                controller: CreateSthController,
                backdrop: true,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            }).result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            });
        };
    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {}]);

    var CreateSthController =  function ($scope, $modalInstance, items) {
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };
        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
