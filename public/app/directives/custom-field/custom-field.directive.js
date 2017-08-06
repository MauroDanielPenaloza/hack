
app.directive('custom', [function () {
	return {
		restrict: 'E',
		templateUrl: 'app/directives/custom-field/custom-field.directive.html',
		scope: {
			field: '='
		}, 
		link: function ($scope, iElement, iAttrs) {
			$scope.type;
			if ($scope.field.vType==='string') {
				$scope.type='text';
			}
			else if($scope.field.vType=='int' || $scope.field.vType=='float'){
				$scope.type='number';
			}else if($scope.field.vType=='boolean'){
				$scope.type="checkbox";
			}
		}
	};
}])