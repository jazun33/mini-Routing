var app = angular.module('mini-routing');

app.controller('productsCtrl', function($scope, id, productService) {
    if (id === 'shoes') {
        $scope.productData = productService.shoeData;
    } else if (id === 'socks') {
        $scope.productData = productService.sockData;
    }
});