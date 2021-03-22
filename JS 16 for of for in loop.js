// 1 counting length & printing array with while loop

var names=["joy","bijoy","jui","rakib","rahat"]
var namesLen = names.length
console.log(namesLen)

var x =0;
while(x <= namesLen){
console.log(names[x])
 x++}


// 2 printing array value with for of

for(var x of names){
    console.log(x)
}

// 3 kicking out someone

for (var y of names){
    if(y=="rakib"){
        console.log("rakib is suspended!")}
}

// 4 printing object value with for in

var bio ={
    Fname : "hasan",
    Lname : "bijoy",
    age : 21,
    address : "noakhali",
    proffesion : "student"
}

for(var x in bio){

    console.log(x)
    console.log(bio[x])
}

// 5 using ` ` in console log & printing properties & value together

for (var y in bio){

   console.log(`property: ${y} & value :${bio[y]}`)
}