 /*
// 1 creating input 

var x =parseInt(prompt("write your number"))
var y=parseInt(prompt("write the second num"))
var result=x*y;
console.log(result)


// 2 multiple input

for(var x=1; x<= 5; x++){

 var m =parseInt(prompt("write the first number"))
 var n =parseInt(prompt("write the second number"))
 var result =m+n
 console.log(result)
}*/

for(x=1; x<=3; x++){
    let number =parseInt(prompt("inter your first number"))
  
    if(number<33){console.log(`failed:${x}`)}
    else{console.log(`passed:  ${x}`)}

}
