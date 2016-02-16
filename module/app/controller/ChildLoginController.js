angular.module('app').controller('ChildLoginController',function($scope,$location){
   
    console.log("I m in ChildLoginController");
    
    $scope.$on('testBroadcast',function(event,data){
       console.log('Event Captured');
        console.log(event);
        console.log(data);
    });
    
});