import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import {Email} from '../../common/models';

export class EmailService {

  /* @ngInject */
  constructor(private $http:angular.IHttpService, private $rootScope:angular.IRootScopeService) {
  }

  public send(email:Email) {
    let url = "/api/email";
    this.$http.post(url, email);
  }
}
