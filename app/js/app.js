(function() {
    'use strict'

    var app = angular.module('myApp', ['firebase', 'ngAnimate'])

    app.controller('mainCtrl', ['$scope', '$firebaseArray',
        function($scope, $firebaseArray) {
            var ref = new Firebase('https://my-first-app-a5b44.firebaseio.com/personas');

            $scope.personas = $firebaseArray(ref);

            function limpiarForm() {
                $scope.nombrePersona = "";
                $scope.edadPersona = "";
                $scope.direccionPersona = "";
                $scope.emailPersona = "";
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
