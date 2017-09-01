/**namespace and export interface**/
var VechicleNameSpace;
(function (VechicleNameSpace) {
    function carDetails(car) {
        console.log(" The car details are : Model " + car.model + " , \n     Engine " + car.engine + " and the horespower is " + car.horsePower);
    }
    VechicleNameSpace.carDetails = carDetails;
})(VechicleNameSpace || (VechicleNameSpace = {}));
///<reference path = 'interface.ts' />
var myCar = { engine: 'Z1000', horsePower: 2200, model: 'Swift Z' };
VechicleNameSpace.carDetails(myCar);
