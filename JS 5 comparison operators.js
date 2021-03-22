/* == equals to something

var x="20"
var y =20
var result= x==y

document.querySelector("#CO").innerHTML=result


//===equals value & type to something
var x="20"
var y =20
var result= x===y

document.querySelector("#CO").innerHTML=result

var x=20
var y =10
var result= x>=y

document.querySelector("#CO").innerHTML=result

//practical


 == & ===
var userPassWord="1234";
var regPassWord=1234;

//normal check==
//var resul= (userPassWord===regPassWord)?"login success":"login failed";

//hard check===
var resul= (userPassWord===regPassWord)?"login success":"login failed";


// > & < check

var minAge =18
var userAge =17


var resul= (minAge> userAge)?"you can't register":"you have entered the website";
document.querySelector("#CO").innerHTML=resul


// <= & >= check

var minAge =18
var userAge =17

var resul= (minAge> userAge)?"you can't register":"you have entered the website";
document.querySelector("#CO").innerHTML=resul
var result=(enteringPerson == "joy" || enteringPerson =="bijoy" || enteringPerson =="jui")? "you can enter" : "you get out";


// || or of something

var enteringPerson ="jui";

var permitted =(enteringPerson =="joy" || enteringPerson=="bijoy" ||  enteringPerson=="jui")? "you can enter" : "you get out"
document.querySelector("#CO").innerHTML=permitted


// && and of something

var name ="jui";
var age =18;
var country="bangladesh"
var registration=(name=="jui" && age==18 && country=="bangladesh")? "you have entered":"you are't permitable for this"
document.querySelector("#CO").innerHTML=registration

*/
// trying out && & ||

var proffesion= "student";
var age =18;
var country ="iran";
var permitted= ((proffesion=="student" && age ==18) && (country=="bangladesh" || country =="pakistan" || country =="iran") )? "you are permitted" : "you arent allowed to enter this"
document.querySelector("#CO").innerHTML=permitted