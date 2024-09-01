var app = angular.module('portfolioApp', ["ngRoute"]);
app.controller('appCtrl', function($scope) {
$scope.greeting = 'something';
$scope.clientTestimonials = [
{
    name: 'John Doe',
    company: 'Bike Dealer, Some Company',
    text: 'This is the best videographer ever'
},
{
    name: 'Jane Doe',
    company: 'Motorcyclist, Some Other Company',
    text: 'I said WOW!'
}
];
 
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