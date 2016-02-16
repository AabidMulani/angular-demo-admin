angular.module('app').config(function($routeProvider){
    
    $routeProvider.when('/',{
        templateUrl:'views/LoginPage.html',
    });
    
    $routeProvider.when('/login',{
        templateUrl:'views/LoginPage.html',
    });
    
    $routeProvider.when('/register',{
        templateUrl:'views/RegistrationPage.html',
    });
    
    $routeProvider.otherwise({
        redirectTo:'/login'
    });
    
});