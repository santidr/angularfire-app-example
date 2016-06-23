(function() {
    'use strict';

    angular.module('myApp')

    .controller('mainCtrl', ['$scope', '$firebaseArray',
        function($scope, $firebaseArray) {
            var ref = new Firebase('https://my-first-app-a5b44.firebaseio.com/personas');

            $scope.personas = $firebaseArray(ref);

            function limpiarForm() {
                document.getElementById('perForm').reset();
            }

            $scope.agregarNuevo = function() {
                $scope.personas.$add({
                    nombre: $scope.nombrePersona,
                    edad: $scope.edadPersona,
                    direccion: $scope.direccionPersona,
                    email: $scope.emailPersona
                });
                limpiarForm();
            };

            $scope.eliminar = function(p) {
                $scope.personas.$remove(p);
            }
    }]);
})();
