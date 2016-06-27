App.controller('paramsController', function ($scope, Settings) {
	$scope.increment = Settings.values.increment;
	$scope.limmax = Settings.values.limmax;
	$scope.limmin = Settings.values.limmin;
	$scope.enregistrer = function(){
		Settings.values.increment = $scope.increment;
		Settings.values.limmax = $scope.limmax;
		Settings.values.limmin = $scope.limmin;
		alert("Paramètres enregistrés");
	};
});