app.controller('NavbarController', ['$scope','$state', function($scope, $state){
	$scope.currentNavItem=$state.current.name;
	
}])