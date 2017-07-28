var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(true);

   $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeController',
   })

   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/sobre', {
      templateUrl : 'app/views/curriculo.html',
      controller  : 'CurriculoController',
   })

   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'ContatoController',
   })

   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});

$(document).load(function(){
      //Escrevendo cookie para controle de sessão
     if(readCookie("mdx_section")==null){
         writeCookie("mdx_section", makeid());
     }
});
