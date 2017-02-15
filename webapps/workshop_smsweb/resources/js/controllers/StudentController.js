/**
 * Created by mijo on 2016-07-07.
 */
angular.module('myApp')
    .controller('StudentController', ['$scope', '$http', function ($scope, $http) {
        //$http.get('http://cppdemo.azurewebsites.net/api/students').success(function (data) {
            $http.get('http://localhost:8080/workshop_sms/spring/students').success(function (data) {
                $scope.students = data;
        });
    }]);