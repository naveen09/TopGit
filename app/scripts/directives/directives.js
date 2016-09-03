(function(module) {
    module.directive('mask', mask);

    function mask() {
        var directive = {
            link: link,
            template: "<div class='mask' layout='row' layout-align='space-around' layout-sm='column' ng-if='showloading'><md-progress-circular md-mode='indeterminate' md-diameter='250px'></md-progress-circular></div>",
            restrict: 'EA',
            scope: {
                showloading: '='
            }
        };
        return directive;

        function link(scope, element, attrs, ctrl) {};
    };
    module.directive('searchcontent', searchcontent);

    function searchcontent() {
        var directive = {
            link: link,
            templateUrl: "views/templates/search.template.html",
            restrict: 'EA',
            scope: {
                data: '='
            }
        }
        return directive;

        function link(scope, element, attrs, ctrl) {};
    }
})(angular.module('topgitApp'));