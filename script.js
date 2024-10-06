var app = angular.module('portfolioApp', ["ngRoute"]);
app.controller('appCtrl', function($scope) {
$scope.greeting = 'something';
$scope.linkFilter = "all";

$scope.reviews = [
{
    name: 'John Doe',
    company: 'Bike Dealer, Some Company',
    text: 'This is the best videographer ever'
},
{
    name: 'Jane Doe',
    company: 'Motorcyclist, Some Other Company',
    text: 'I said WOW!'
},
{
    name: 'Sally Seashells',
    company: 'Saleswoman, Seashell Distribution Company',
    text: 'Thairy did a great job capturing the essence of seashell selling by the seashore! :D'
},

];

$scope.showAll = function () {
   $scope.linkFilter = "all";
};

$scope.showAutomotive = function () {
    $scope.linkFilter = "automotive";
};

$scope.showRealEstate = function () {
    $scope.linkFilter = "real estate";
};

$scope.showInterviews = function () {
    $scope.linkFilter = "interviews";
};
 
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
    
});

app.directive('clientTestimonials', function(){
    return {
        restrict: 'E',
        templateUrl: 'home-files/components/reviewsComponent.html',
        scope: {
            data: '='
        }
    };
});