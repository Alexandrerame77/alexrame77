App.controller('IncrementerController', function($scope, Settings) {
	$scope.history = [];
    $scope.nombre = 0;
    var limit = function(){
		if ($scope.nombre < Settings.values.limmin) {
			$scope.nombre = Settings.values.limmin
		}
		if ($scope.nombre > Settings.values.limmax) {
			$scope.nombre = Settings.values.limmax
		}
		$scope.history.push($scope.nombre);
    }
	limit();
	$scope.moins = function(){
		$scope.nombre -= Settings.values.increment;
		limit();
	};
	$scope.plus = function(){
		$scope.nombre += Settings.values.increment;
		limit();
	};
});