var app = angular.module('mdx-app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
	//Removind # from URL
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeCtrl',
   })
   .when('/libraries', {
      templateUrl : 'app/views/libraries.html',
      controller     : 'LibrariesCtrl',
   })
	.otherwise ({ redirectTo: '/' });
});

app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('LibrariesCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

var app = angular.module('mdx-app', ['pascalprecht.translate']);

app.config(function($translateProvider) {
  $translateProvider.translations('en', {
    SITE_TITLE: 'MARCKDX - Software Developer',
    SITE_CUR_LANG: 'En',
    
    TAB_HOME: 'Home',
    TAB_PROJECTS: 'Projects',
    TAB_BLOG: 'Blog',
    TAB_ABOUT: 'About',
    TAB_CONTACT: 'Contact',

    FOOTER_DESCRIPTION: 'Software developer, passionated to information technology and science.',

    BUTTON_TEXT_EN: 'English',
    BUTTON_TEXT_PT: 'Portuguese',
    BUTTON_TEXT_ES: 'Spanish',

    MY_HISTORY: 'MY HISTORY',
    DOWNLOAD_RESUME: 'DOWNLOAD RESUME',
    PERSONAL_INFO: 'PERSONAL INFO',

    NAME: 'Name',
    AGE: 'Age',
    TEL: 'Phone',
    EMAIL: 'Email'

  })
  .translations('pt', {
    SITE_TITLE: 'MARCKDX - Desenvolvedor de Software',
    SITE_CUR_LANG: 'Pt',
    
    FOOTER_DESCRIPTION: 'Desenvolvedor de software, apaixonado por tecnologia da informação e ciência.',

    TAB_HOME: 'Home',
    TAB_PROJECTS: 'Projetos',
    TAB_BLOG: 'Blog',
    TAB_ABOUT: 'Sobre',
    TAB_CONTACT: 'Contato',

    BUTTON_TEXT_EN: 'Inglês',
    BUTTON_TEXT_PT: 'Português',
    BUTTON_TEXT_ES: 'Espanhol',

    MY_HISTORY: 'MINHA HISTÓRIA',
    DOWNLOAD_RESUME: 'BAIXAR CURRÍCULO',
    PERSONAL_INFO: 'INFORMAÇÃO PESSOAL',

    NAME: 'Nome',
    AGE: 'Idade',
    TEL: 'Telefone',
    EMAIL: 'Email'

  }).translations('es', {
    SITE_TITLE: 'MARCKDX - Desarollador de Software',
    SITE_CUR_LANG: 'Es',

	FOOTER_DESCRIPTION: 'Desarrollador de software, aficionado a la ciencia y la tecnología de la información.',

    TAB_HOME: 'Home',
    TAB_PROJECTS: 'Proyectos',
    TAB_BLOG: 'Blog',
    TAB_ABOUT: 'Sobre',
    TAB_CONTACT: 'Contacto',

    BUTTON_TEXT_EN: 'Inglés',
    BUTTON_TEXT_PT: 'Portugués',
    BUTTON_TEXT_ES: 'Español',

    MY_HISTORY: 'MI HISTORIA',
    DOWNLOAD_RESUME: 'DESCARGAR RESUMEN',
    PERSONAL_INFO: 'INFORMACIÓN PERSONAL',

    NAME: 'Nombre',
    AGE: 'Idad',
    TEL: 'Teléfono',
    EMAIL: 'Correo'
  });
  $translateProvider.preferredLanguage('en');
});

app.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
});

$( document ).ready(function() {
  $('.year').text(new Date().getFullYear());
});
	


