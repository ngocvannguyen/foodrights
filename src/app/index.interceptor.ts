import {RequestInterceptor} from './common/interceptors/request.interceptor';

/** @ngInject */
export function httpHeaderInterceptorConfig($httpProvider:angular.IHttpProvider) {
  $httpProvider.interceptors.push(RequestInterceptor.Factory);
}
