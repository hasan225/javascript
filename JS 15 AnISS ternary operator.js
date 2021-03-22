
// 1 with if else

var x=8;
if(x>0){
    console.log("positve")
}
else{
    console.log("negetive")
}


// 2 with ternary operator
var x=-7
var num= x>0 ? "positive":"negetive"

console.log(num)


// 3 more complicated if else condition

var y=parseInt(prompt("write your number : "))

if(y>0){
    console.log("postive");
}
else if(y<0)
   { console.log("negetive");
    }
else{
    console.log("zero");
}
// 4 more complicated ternary operator
var y =5
var condition =y>0? "positive": y<0?"negetive": "zero";
console.log(condition)


// 5 (3 , 6, 8, 10) which one is the largest number

var a= 3>10 && 3>8 && 3>6 ? "positve":"negetive"
var b= 6>10 && 6>8 && 6>3 ? "positve":"negetive"
var c= 8>10 && 8>6 && 8>3 ? "positve":"negetive"
var d=10>3 && 10>6 && 10>8 ? "positve":"negetive"

console.log(a)
console.log(b)
console.log(c)
console.log(d)
