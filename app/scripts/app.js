'use strict';
/**
 * @ngdoc overview
 * @name topgitApp
 * @description
 * # topgitApp
 *
 * Main module of the application.
 */
angular.module('topgitApp', ['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ngMaterial', 'ui.router']).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('search', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
    });
}]);