/*var sent=2000;
var tax=2;
var result=sent/100 *tax
document.querySelector("#function").innerHTML=result;


var phonePrice=80000;
var tax=57;
var result=phonePrice/100 *tax
document.querySelector("#function2").innerHTML=result;



//functions
function taxCalculator(){
 var value =80000
 var tax =57   
 var result= value /100 * tax

 //document.querySelector("#function2").innerHTML=result;
 document.write(result + "</br>")
}
taxCalculator()
taxCalculator()


//creating multiple links with function

function multipleButton() {
 document.write('<a style="background:linear-gradient(gray,red,black,blue,yellow) ;color:white; text-decoration:none; padding:5px;padding-bottom:10px;border-radius:5px; font-family:cursive;font-size:20px;text-align:center;letter-spacing:2px;font-weight:700" href="https://www.google.com">Google</a>')
+-
0

}
multipleButton()
multipleButton()
multipleButton()
multipleButton()
multipleButton()


//adding strings & functions together

function firstHalf(){
return "chapata + pani + elachi +";
}

function otherHalf(){
    return "milk + darchini";
}
var price="   = 40 Taka;"
var person=" for each"
document.write(firstHalf()+ otherHalf() +"+ long + tezpata " + price +" price for this tea" + person);


// creating business calculator
var extra =10
function productPrice(mobile ,tax, buyer){

    var internationalPrice=mobile;
    var taxvar=tax;
    var totalPrice= internationalPrice /100 * tax +internationalPrice;
    return totalPrice+ extra + " by " + buyer;
}
//document.write(productPrice())
document.querySelector("#mobile").innerHTML=productPrice(60000,57,"joy");
document.querySelector("#tv").innerHTML=productPrice(86000,10,"jui");
document.querySelector("#laptop").innerHTML=productPrice(120000,-12,"bijoy");
*/

//creating business calculator 2
var extra=10
function totalPrice(price,tax,buyer){
 var interPrice=price;
 var conTax=tax;
 var conPrice=interPrice /100 *conTax +interPrice;
 return conPrice + extra + " by "+ buyer;}


document.querySelector("#mobile").innerHTML=totalPrice(60000,57,"joy");
document.querySelector("#tv").innerHTML=totalPrice(90000,-10, "bijoy");
document.querySelector("#laptop").innerHTML=totalPrice(120000,-20 ,"jui");


document.write("<h1 style='color:#fb5200'>hoisting</h1>")

// 3 hoisting

// finding out birthyear
function currentAge(birthYear){
    document.write(`current age : ${2021 - birthYear}`)
}
currentAge(1999)

// findout birth year with object

var person ={ age :22,
    currentYear: function(birthYear){
        console.log(birthYear -this.age)
    }}
console.log(person.currentYear(2021))

// 4 *this* keyword in javascript

// ** to see screen size

console.log(this.screen["availWidth"])

// ** to see html document

console.log(this.document["all"])


