// 1 for loop

document.write("<h1 style='color:rgb(0, 140, 00)'>for loop</h1>")

for(var x=1; x<=100; x=x+2 ){
    document.write(x+" ")

}


//2 sum with for loop 1+2+3+4+5+.......

document.write("<h1 style='color:rgb(0, 140, 00)'>sum with for loop</h1>")

var sum=0;
for(var x=1; x <= 10; x=x+1){
sum=sum+x;}

document.write("<b>sum is = </b>"+sum)


// 3 sum userinput with for loop


document.write("<h1 style='color:rgb(0, 140, 00)'>sum userInput with for loop</h1>")
/*
var m = parseInt(prompt("enter the start number"));
var n = parseInt(prompt("inter the end number"));
var sum=0;
for(var x=m; x <= n; x=x+1){
    sum=sum+x;}

    document.write("<b>userInput sum = </b>"+sum)*/

// 4 looping user input

 document.write("<h1 style='color:rgb(0, 140, 00)'>looping userInput</h1>")
/*
for (x=1; x <= 5; x++){
    var p =parseInt(prompt("inter the first number"))
    var q =parseInt(prompt("enter the second number"))
    var result=p+q;
    document.write(result)
}*/




//5 while loop

document.write("<h1 style='color:#fb5200;'>while loop</h1>")

var x=0
while(x <= 100){
    document.write(x+" ")
    x=x+2
}

// 6 sum with while loop 1+2+3+4+5......

document.write("<h1 style='color:#fb5200;'>sum with while loop</h1>")

var x=0
var sum=0
while(x <= 100){
    sum=sum+x
    x=x+1
    
}
document.write("<b>sum is =</b>" +sum)


// 7 sum of numbers that are divisible by 3 & 5 using while loop

document.write("<h1 style='color:#fb5200;'>numbers that are divisible by 3 & 5 using while loop</h1>")
var x=0;
var sum=0;
while(x <=100 ){
    if(x%3==0 && x%5==0 ){
        document.write(x+" ")
        sum=sum+x
    }
 
   
    x=x+1
}
document.write("<b>sum is =</b>" +sum)


// 8 do while loop

document.write("<h1 style='color:#ff2052'>do while loop</h1>")

var x=0
do{ document.write(x +" ")
    x++}
while(x <=50)


// 9 break

document.write(" <h1 style='color:#208aff'>break</h1>")

for(x=0; x <= 50 ; x=x+1){

    document.write(x + " ")

    if(x ==10){
        break;
}}
document.write("<h2>End</h2>")


// 10 continue

document.write("<h1 style='color:#208aff'>continue</h1>")

for(x=0; x <= 30; x++){
    
    //if(x%2==0){continue} odd
    //if(x%2!=0){continue} even
    document.write(x + " ")
    
    if (x==20){continue}
 
}
document.write("<h2>End</h2>")