var app = angular.module('portfolioApp', ["ngRoute"]);
app.controller('appCtrl', function($scope) {
$scope.greeting = 'something';
$scope.linkFilter = "all";

$scope.reviews = [
{
    name: 'John Doe',
    company: 'Bike Dealer, Some Company',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
},
{
    name: 'Jane Doe',
    company: 'Motorcyclist, Some Other Company',
    text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Porttitor porttitor torquent ultricies orci posuere eros quis senectus nascetur. Urna nulla semper hac libero egestas sodales venenatis litora ut. Purus magnis volutpat himenaeos fermentum scelerisque.'
},
{
    name: 'Sally Seashells',
    company: 'Saleswoman, Seashell Distribution Company',
    text: 'Torquent varius elit taciti sapien turpis venenatis finibus nascetur. Maximus fusce iaculis dictum est nascetur. Curae dolor eu urna ipsum enim dolor faucibus lectus. Magnis dictumst massa vehicula; enim viverra vivamus auctor.'
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