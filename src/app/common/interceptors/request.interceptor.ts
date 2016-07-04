'use strict';
export class RequestInterceptor {
  constructor(private $cookies:angular.cookies.ICookiesService) {
  }

  public request = (config:ng.IRequestConfig) => {
    console.log("request");
    return config;
  };

  /* @ngInject */
  public static Factory($cookies:angular.cookies.ICookiesService):RequestInterceptor {
    return new RequestInterceptor($cookies);
  }
}
