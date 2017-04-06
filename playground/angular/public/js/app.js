angular.module('TestApp', []);
angular.module('TestApp')
    .controller('MainController', ctrlFunc);


// this refers to vm or View Model, on MainController
function ctrlFunc() {
    this.message = "Feelin Angular?";

    this.people = clientPeople;

}
