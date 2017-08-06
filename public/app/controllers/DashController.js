app.controller('DashController', ['$scope','$http','$mdDialog', function($scope, $http, $mdDialog){
	$scope.customs=
		[
            {
                "name": "numberTest",
                "vDisplay": "Valor Numerico",
                "vType": "int",
                "validations": {
                    "required": true,
                    "maxLength": 10,
                    "minLength": 1,
                }
            },
             {
                "name": "stringTest",
                "vDisplay": "Valor String",
                "vType": "String",
                "validations": {
                    "required": true,
                    "maxLength": 10,
                    "minLength": 1,
                }
            },
             {
                "name": "booleanTest",
                "vDisplay": "Valor boolean",
                "vType": "boolean",
                "validations": {
                    "required": false,
                    "maxLength": 10,
                    "minLength": 1,
                }
            }
        ];
	 
}]);