'use strict';
(function(){

class DashboardComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('meanFullstackApp')
  .component('dashboard', {
    templateUrl: 'app/dashboard/dashboard.html',
    controller: DashboardComponent
  });

})();