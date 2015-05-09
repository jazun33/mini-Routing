var app = angular.module('mini-routing', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .when('/products/:id', {
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl',
            resolve: {
                id: function($route, productService){
                    return productService.getData($route.current.params.id);
                }
            }
        })
        .when('/settings', {
            templateUrl: 'js/settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
});