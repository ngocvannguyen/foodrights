import {WordingService} from '../app/common/services/wording.service';

/** @ngInject */
export function runBlock($log: angular.ILogService, wordingService:WordingService, $rootScope:angular.IRootScopeService) {
  wordingService.setWording('vietnamese');
  $log.debug('runBlock end');
}
