/*
//object properties 

var car={
    name :"toyota corolla",
    price :1000000,
    carColor :"red",
    wheelSize :"14"
}
document.querySelector("#name").innerHTML=car.name;
document.querySelector("#price").innerHTML=car.price;
document.querySelector("#color").innerHTML=car.carColor;
document.querySelector("#wheel").innerHTML=car.wheelSize;


//object methods with properties

var car={
    name :"toyota corolla",
    price :3500000,
    tax :40,
    carColor :"red",
    wheelSize :"14",
    adBanner : function (discount){

    var carPrice= this.price;
    var tax= this.tax;
    var mainPrice=carPrice/100*tax+carPrice;
    var carDiscount= discount;
    var reduced=mainPrice/100*carDiscount;
    var finalPrice=mainPrice-reduced;
        return finalPrice;

    }//method

}//object
document.querySelector("#name").innerHTML=car.name;
document.querySelector("#price").innerHTML=car.price;
document.querySelector("#color").innerHTML=car.carColor;
document.querySelector("#wheel").innerHTML=car.wheelSize;
document.querySelector("#gTax").innerHTML=car.tax;
document.querySelector("#method").innerHTML=car.adBanner(40);
*/


//creating method inside object
var car={};
car.name="toyota corolla";
car.price="3500000";
car.color="red";
car.tax="30";
car.Name="mitsuha"
delete car.name
car.objectMethod=function(a,b){


//return "hello subaru kun daisuki nandayo"
return a+b
}


 
console.log(car.price +" "+car.Name)
//console.log(car.objectMethod())
console.log(car.objectMethod(10,20))