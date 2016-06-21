import {WordingService} from '../app/common/services/wording.service';

/** @ngInject */
export function runBlock($log: angular.ILogService, wordingService:WordingService) {
  wordingService.setWording('vietnamese');

  $log.debug('runBlock end');
}
