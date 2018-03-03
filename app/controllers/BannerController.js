'use strict';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('identifikasi')
    .controller('BannerController', function ($scope, $timeout, BannerServices) {
        $scope.data = [];

        $scope.getTempat = function () {
            BannerServices.ambil().success(function (data) {
                $scope.data = data.data;
                $scope.nopol=data.data.nopol;
                $scope.nama=data.data.nama;
                $scope.id_pengguna=data.data.id_pengguna;
            });

            $timeout(function(){
                $scope.getTempat();
            },10000)
        };

        $scope.getTempat();
    });