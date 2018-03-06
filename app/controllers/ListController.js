'use strict';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('identifikasi')
    .controller('ListController', function ($scope, ListServices) {

        $scope.history = [];

        $scope.reload = function(){
            ListServices.ambil().success(function (data) {
                $scope.history = data.data;
            })
        }

        $scope.reload();

    });