angular.module('app').directive('cardInmo', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
	return {
		restrict: 'E',
		templateUrl:'scripts/directives/card-custom/card.template.html',
		scope:{
			entitie:'='
		},
		link: function ($scope, iElement, iAttrs) {
			
			$scope.Click_BtnAccion=function (){
				if($scope.entitie.accion==="Cobrar"){
					$rootScope.$broadcast('Click_BtnCobrar', $scope.entitie);
				}else{
					$rootScope.$broadcast('Click_BtnAlquilar', $scope.entitie);
				}
			}
		}
	};
}])