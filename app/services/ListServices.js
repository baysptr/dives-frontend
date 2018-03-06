'use strict';

angular.module('identifikasi')
    .factory('ListServices', function ($http) {
//            var url = 'http://80.211.135.231/mobile_parking/public/api/tempat';
        var url = 'http://localhost:8000/api';
        return {
            ambil: function () {
                return $http.get(url+'/history');
            }
        };
    });