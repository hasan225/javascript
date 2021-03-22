// 1 password matching

let x = "abcd1234";
let y ="ABCD1234";

if (x==y){
    console.log("matched")
}
else{console.log("didnt matched")}


// 2 conditional statement registering

let name = "bijoy";
let age = 20;
let country = "bangladesh";
let password = "1234abcd";
let conPassword = "1234abcd";

if ( (country != "pakistan" && country !="india") && password==conPassword ){
    console.log("you can register")
}
else{console.log("you can't register")}


// 3 letter grade with else if

let fullNumber = 100;

let got = 30;

if (got<=100 && got >80){console.log("A++")}
    
else if(got<=80 && got>70){console.log("A")}

else if(got<=70 && got>60){console.log("a-")}

else if (got<=60 && got>50){console.log("b")}

else if(got<=50 && got>40){console.log("c")}

else if (got<=40 && got>30){console.log("d")}

else {console.log("fail")}


// 4 another registration form

const Name = "bijoy";
const Age =56;
const email ="uzumakibijoy2017@gmail.com";
const Password ="123456abcd"
const confirmPassword ="23456abcd"
const Country= "india";
const proffesion="student";
const hobby ="coding"


// 1 check Age eligblity

if (Age<18){console.log("U CAN'T REGISTER GROW UP FIRST KID")}
else if (Age>=50){console.log("you you can't register either")}
else {console.log("you are registered")}


// 2 check country

if (Country =="miyanmar" || Country =="india" || Country=="chin"){console.log("these countries arent allowed")}


// 3 Password checking

if (Password != confirmPassword){
    console.log("Password and confirmPassword doesn't match")
}
