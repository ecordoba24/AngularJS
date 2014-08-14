function controladorTareas($scope){
	$scope.tareas = [
	{texto: 'Aprender HTML', hecho: true },
	{texto: 'Aprender AngularJS', hecho: false }
	];

	$scope.agregarTarea = function() {
		if($scope.textoNuevaTarea){
			$scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: false});
			$scope.textoNuevaTarea = '';
		}
	};

	$scope.pendientes = function(){
		var count = 0;
		angular.forEach($scope.tareas, function(tarea){
			count += tarea.hecho ? 0 : 1;
		});
		return count;
	};

	$scope.realizadas = function(){
		var count = 0;
		angular.forEach($scope.tareas, function(tarea){
			count += tarea.hecho ? 1 : 0;
		});
		return count;
	};

	$scope.porcentajeCompletado = function(){
		return $scope.realizadas()/$scope.tareas.length*100 ;
	};

	$scope.stylePorcentaje = function(){
		if($scope.porcentajeCompletado() == 100){
			return "success";
		}

		if($scope.porcentajeCompletado() <= 25){
			return "danger";
		}else{
			return "warning";
		}
	};
}