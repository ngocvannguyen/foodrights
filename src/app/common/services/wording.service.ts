import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
export class WordingService {

  /* @ngInject */
  constructor(private $http:angular.IHttpService, private $rootScope:angular.IRootScopeService) {
  }

  public setWording(language:string) {
    let url = "assets/messages/" + language + "/wording.json";
    this.$http.get(url).then((httpPromise:IHttpPromiseCallbackArg<string>) => {
      this.$rootScope['wording'] = httpPromise.data;
    });
  }
}
