var app = angular.module('mini-routing');

app.service('productService', function($q){

    this.getData = function(id){
        var deferred = $q.defer();
        deferred.resolve(id);
        return deferred.promise;
    }

    this.shoeData = [
        {
            type: 'Nike',
            color: 'Red',
            size: 12
        },
        {
            type: 'Reebok',
            color: 'Blue',
            size: 9
        },
        {
            type: 'Adidas',
            color: 'Yellow',
            size: 6
        },
        {
            type: 'Puma',
            color: 'Green',
            size: 7
        }
    ];

    this.sockData = [
        {
            type: 'Stance',
            color: 'Red',
            size: 'S'
        },
        {
            type: 'Nike',
            color: 'White',
            size: 'M'
        },
        {
            type: 'Reebok',
            color: 'Green',
            size: 'L'
        },
    ];
});