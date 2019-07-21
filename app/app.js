'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
}]);

// Login-Prozess
function Login(){
  var UserName = getUserName();
  var Password = getPassword();
  var correctLoginData = checkLoginData(UserName, Password);
  if(correctLoginData){
    window.location.href = "Main.html";
  }else{
    showLoginPopup();
  }
}

function getUserName(){
  // Zieht den UserNamen aus dem HTML Dokument
  return document.querySelector("#UserName_input").value;
}

function getPassword(){
  // Zieht das Passwort aus dem HTML Dokument
  return document.querySelector("#Password_input").value;
}

function checkLoginData(UserName, Password){
  // Checkt ob die LoginDaten im JSON sind
  if(UserName == "Louis" && Password =="1234"){
    alert("Login erfolgreich!");
    return true;
  }else{
    return false;
  }
}

function showLoginPopup(){
  // Zieht sich das PopUp
  var popUpLogin = document.getElementById("popUpLogin");

  // Zieht sich das (x) zum schließen
  var span = document.getElementsByClassName("popup_close")[0];

  // Macht das PopUp sichtbar
  popUpLogin.style.display = "block";

  // Wenn der Benutzer das (x) drückt wird das Pupup geschlossen
  span.onclick = function() {
    popUpLogin.style.display = "none";
  }
}