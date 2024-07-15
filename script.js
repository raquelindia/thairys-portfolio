var app = angular.module('portfolioApp', ["ngRoute"]);
app.controller('appCtrl', function($scope) {
$scope.greeting = 'something';
 
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        controller: "appCtrl"
    })
    .when("/about", {
        templateUrl : "about.html",
        controller: "appCtrl"
    })
    .when("/contact", {
        templateUrl : "contact.html",
        controller: "appCtrl"
    })
    .when("/services", {
        templateUrl : "services.html",
        controller: "appCtrl"
    })
    .otherwise({
        templateUrl : "index.html",
        controller: "appCtrl"
    });
    
})