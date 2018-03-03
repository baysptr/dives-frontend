'use strict';

angular.module('identifikasi')
    .factory('BannerServices', function ($http) {
//            var url = 'http://80.211.135.231/mobile_parking/public/api/tempat';
        var url = 'http://localhost:8000/api';
        return {
            ambil: function () {
                return $http.get(url+'/lastupdate/history');
            },
            ambilPengguna: function (id_penggua) {
                return $http.get(url+'/pengguna/'+id_penggua);
            },
            ambilKendaraan: function (id_pengguna) {
                return $http.get(url+'/kendaraan/'+id_pengguna);
            },
            ambilHistory: function (id_kendaraan) {
                return $http.get(url+'/history/'+id_kendaraan);
            }
        };
    });