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
            .state('list', {
                url: '/list',
                templateUrl: 'app/views/list.html',
                controller: 'ListController'
            })
            .state('author', {
                url: '/author',
                templateUrl: 'app/views/author.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/views/about.html'
            })
            .state('detail', {
               url: '/detail/@/:id_pengguna',
               templateUrl: 'app/views/detail-banner.html',
               controller: 'DetailsController'
            });
    }]);