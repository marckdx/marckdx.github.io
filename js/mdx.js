	
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
    BUTTON_TEXT_ES: 'Spanish'
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
    BUTTON_TEXT_ES: 'Espanhol'
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
    BUTTON_TEXT_ES: 'Español'
  });
  $translateProvider.preferredLanguage('pt');
});

app.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
});