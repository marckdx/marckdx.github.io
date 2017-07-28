app.controller('HomeController', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('CurriculoController', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('ContatoController', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});