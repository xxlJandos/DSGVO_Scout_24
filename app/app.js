'use strict';

import { $ } from "protractor";

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

function getLoginData() {
  var UserName = document.getElementById("UserName_input").value;
  var Password = document.getElementById("Password_input").value;
  // Check the LoginData
  checkLoginData(UserName, Password);
}

function checkLoginData(UserName, Password){
  if(UserName == "Nico" && Password == "1234"){
    
  }else{

  }
}

