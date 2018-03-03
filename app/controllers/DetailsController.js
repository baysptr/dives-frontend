'use strict';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('identifikasi')
    .controller('DetailsController', function ($scope, $stateParams, BannerServices) {

        $scope.id_pengguna = $stateParams.id_pengguna;
        $scope.Pengguna = [];
        $scope.Kendaraan = [];
        $scope.History = [];

        $scope.data = function (idp) {
            $scope.id_kendaraan = "";
            BannerServices.ambilPengguna(idp).success(function (data) {
               $scope.Pengguna = data.data;
            });
            BannerServices.ambilKendaraan(idp).success(function (data) {
                $scope.Kendaraan = data.data;
                $scope.id_kendaraan = data.data.id;
            });
            BannerServices.ambilHistory($scope.id_kendaraan).success(function (data) {
                $scope.History = data.data;
            });
        };

        $scope.data($scope.id_pengguna);

    });