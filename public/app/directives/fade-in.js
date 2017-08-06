app.directive('fadeIn', ['$timeout',function ($timeout) {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			
			iElement.addClass("ng-hide-remove");
			iElement.on('load',function(){	
        		iElement.addClass("ng-hide-add");
				
			})
		}
	};
}]);
app.directive('fadeOut', ['$timeout',function ($timeout) {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			iElement.on('click',function(){	
				var parent= iElement.parent(); 
				var brothers=parent.children();
				var image;
				angular.forEach(brothers, function(brother){
					if(brother.localName=='img'){
						image= $(brother);
					}	
				});
				if(image){
					image.removeClass('ng-hide-add');
					$timeout(function(){
    					if(parseInt(image.css('opacity'))<1){
    						image.addClass('ng-hide-add');
    					}
  			    	},1000);
				}
			})
		}
	};
}]);
