export class MainController {
  /* @ngInject */
  constructor (private $window:angular.IWindowService, $scope:angular.IScope) {
    $scope['myInterval'] = 3000;
    $scope['slides'] = [
      {
        image: 'assets/images/coriander.png'
      },
      {
        image: 'assets/images/tomato.png'
      },
      {
        image: 'assets/images/rau_muong.jpg'
      },
      {
        image: 'assets/images/banana.png'
      }
    ];
  }

  season() {
    this.$window.location.href ="#/season";
  }
}
