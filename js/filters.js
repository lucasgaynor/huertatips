'use strict';
/* Filters */


angular.module('calendarioFilters',[]).filter('filtroMes', function(){
    return function(cultivos, name){
        
        var arrayToReturn = [];        
        for (var i=0; i<cultivos.length; i++){
            if ((cultivos[i].age == 0)  ||  (cultivos[i].age == this.mes.age) || (typeof cultivos[i].age == "object" && cultivos[i].age.indexOf(this.mes.age) >= 0)) {
                arrayToReturn.push(cultivos[i]);
            } 
        }
        
        return arrayToReturn;
    };
});





