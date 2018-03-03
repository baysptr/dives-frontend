'use strict';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular
    .module('identifikasi', [
        'ui.router',
        'ngResource'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/home.html'
            })
            .state('detail', {
               url: '/detail/@/:id_pengguna',
               templateUrl: 'app/views/detail-banner.html',
               controller: 'DetailsController'
            });
    }]);