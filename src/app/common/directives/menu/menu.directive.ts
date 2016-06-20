export function menu():angular.IDirective {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/common/directives/menu/menu.html',
    link: function(scope:angular.IScope, el:angular.IAugmentedJQuery, attrs:ITooltipAttributes, $window:ng.IWindowService) {
            scope['home'] = function () {
                window.location.href = "#/home";
            };
            scope['about'] = function () {
                window.location.href = "#/about";
            };
            scope['visit'] = function () {
                window.location.href = "#/visit";
            };
            scope['community'] = function () {
                window.location.href = "#/community";
            };
            scope['season'] = function () {
                window.location.href = "#/season";
            };
            scope['isActive'] = function (pageLocation:String) {
                let active = (pageLocation === window.location.hash);
                return active;
            }
        }
  };
}

interface ITooltipAttributes extends angular.IAttributes {
  name: string;
}
