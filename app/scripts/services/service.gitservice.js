(function(module) {
    'use strict'
    module.factory('GitService', GitService);
    GitService.$inject = ['$http', '$q'];
    var baseUrl = "https://api.github.com/search/repositories?order=desc&sort=stars&q=";

    function GitService(http, q) {
        return {
            getAllLanguages: function() {
                var deffered = q.defer();
                http.get('https://gist.githubusercontent.com/mayurah/5a4d45d12615d52afc4d1c126e04c796/raw/ccbba9bb09312ae66cf85b037bafc670356cf2c9/languages.json').success(function(data) {
                    deffered.resolve(data);
                }).error(function(err) {
                    deffered.reject(err);
                });
                return deffered.promise;
            },
            findRepos: function(options) {
                var deffered = q.defer();
                var lang = "language:" + options.language;
                var stars = "stars:0.." + options.stars;
                http.get(this.formatUrl([lang, stars])).success(function(data) {
                    deffered.resolve(data);
                }).error(function(err) {
                    deffered.reject(err);
                });
                return deffered.promise;
            },
            formatUrl: function(args) {
                var url = baseUrl;
                for (var i in args) {
                    url += args[i] + " ";
                }
                return url;
            }
        }
    }
})(angular.module('topgitApp'));