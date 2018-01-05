var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   $locationProvider.html5Mode(true).hashPrefix('!');;

   /*$locationProvider.html5Mode({
    enabled:true
   });*/

   $routeProvider

   .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeController',
   })

   .when('/curriculo', {
      templateUrl : 'app/views/curriculo.html',
      controller  : 'CurriculoController',
   })

   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'ContatoController',
   })

   .when('/manutencao', {
      templateUrl : 'app/views/manutencao.html',
      controller  : 'ManutencaoController',
   })

   .when('/sistemas', {
      templateUrl : 'app/views/sistemas.html',
      controller  : 'SistemasController',
   })

   .when('/consultoria', {
      templateUrl : 'app/views/consultoria.html',
      controller  : 'ConsultoriaController',
   })

   .when('/colaborar', {
      templateUrl : 'app/views/colaborar.html',
      controller  : 'ColaborarController',
   })

   .otherwise ({ redirectTo: '/' });
});

$( document ).ready(function() {
      //Escrevendo cookie para controle de sessão
     if(readCookie("mdx_session")==null){
         writeCookie("mdx_section", makeid());
     }

     /* Registrando o ServiceWorker no navegador*/
     if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker.register('/worker.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }).catch(function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }

});
