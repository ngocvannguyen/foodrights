import {WordingService} from "../../services/wording.service";

export function language():angular.IDirective {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/common/directives/language/language.html',
      /** @ngInject */
    controller: function($scope:angular.IScope, $window:ng.IWindowService, wordingService:WordingService) {
            $scope['change'] = function (language:string) {
                wordingService.setWording(language);
                window.location.href = "#/home";
            };
        }
  };
}
