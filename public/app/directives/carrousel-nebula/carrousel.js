angular.module('app').directive('carrouselNebula', ['$timeout', function ($timeout) {
	return {
		restrict: 'E',
		templateUrl:'scripts/directives/carrousel-nebula/carrousel.html',
		scope:{
			collection:'='
		},
		link: function ($scope, iElement, iAttrs) {
			if($scope.collection){
				$scope.fotoSeleccionada=$scope.collection[0];
			}

			$scope.Click_BtnRight=function(foto){
				 $timeout(function(){
        			var j=$scope.collection.indexOf(foto);
					if(j===($scope.collection.length-1)){
						$scope.fotoSeleccionada=$scope.collection[0];
					}else{
						$scope.fotoSeleccionada=$scope.collection[j+1];
					}
  			    },1000);
				
			}
			$scope.Click_BtnLeft=function(foto){

				$timeout(function(){
        			var j=$scope.collection.indexOf(foto);
				if(j===0){
					$scope.fotoSeleccionada=$scope.collection[$scope.collection.length-1];
					
				}else{
					$scope.fotoSeleccionada=$scope.collection[j-1];
				}
  			    },1000);
			}		
		}
	};
}])