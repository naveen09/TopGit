'use strict';
/**
 * @ngdoc function
 * @name topgitApp.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of the topgitApp
 */
(function(module) {
    module.controller('MainCtrl', MainCtrl);
    MainCtrl.$inject = ['$scope', 'GitService', '$state', '$interval'];

    function MainCtrl(scope, GitService, state, interval) {
        var vm = this;
        vm.showLoading = false;
        vm.total_count = 0;
        vm.rating = 500;
        vm.rating_max = 10000;
        vm.selectedItemChange = selectedItemChange;
        vm.getData = getData;
        vm.selectedItem = "";
        vm.allLanguages = [];
        GitService.getAllLanguages().then(function(data) {
            vm.allLanguages = data;
        });

        function selectedItemChange(item) {
            if (vm.selectedItem != null) {
                getData();
            }
        }

        function getData() {
            vm.showLoading = true;
            if (vm.selectedItem != null && typeof vm.selectedItem != undefined && vm.selectedItem.length > 0) {
                GitService.findRepos({
                    language: vm.selectedItem,
                    stars: vm.rating
                }).then(function(data) {
                    vm.showLoading = false;
                    console.log(data);
                    processData(data);
                });
            }
        }

        function processData(data) {
            vm.total_count = data.total_count;
            vm.items = data.items;
            vm.item = vm.items[0];
        }
    };
})(angular.module('topgitApp'));
//https://api.github.com/search/repositories?q=language:java&order=desc&sort=stars&stars=500