angular
.module('ngLiveHighlights', ['datatables','angularMoment','ngSanitize','ngRoute','ngAnimate'])
.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/HomePage.html',
                controller  : 'LiveFootballScontroller',
                animation   : 'ShowView'
            })

            .when('/Goals', {
                templateUrl : 'pages/HighlightsAndGoals.html',
                controller  : 'HighlightsAndGoals',
                animation   : 'ShowView'
            })

            .when('/About', {
                templateUrl : 'pages/About.html',
                controller  : 'HighlightsAndGoals',
                animation   : 'ShowView'
            })
            .otherwise({
                redirectTo:'/',
                animation   : 'ShowView'
            });
    });
    
 $(document).ready(function(){
    $('ul.tabs').tabs();
  });
      
      
      