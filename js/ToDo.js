function controladorTareas($scope){
	$scope.tareas = [
	{texto: 'Aprender HTML', hecho: true },
	{texto: 'Aprender AngularJS', hecho: false }
	];

	$scope.agregarTarea = function() {
		$scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: false});
		$scope.textoNuevaTarea = '';
	};
}