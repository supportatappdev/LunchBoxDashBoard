/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.username = 'Polayya';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

};

function ChartControl($scope,$rootScope){
    
  
};

angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl) .controller('ChartControl', ['$scope','$rootScope',ChartControl])