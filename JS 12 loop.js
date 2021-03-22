/*
// 1 printing numbers

var x=0;
while(x <=100){
    document.write(x+" ")
    ++x
}

// 2 printing names

var x=0;
while(x <=100){
    document.write("<h1 style='color:#fb5200';>bijoy</h1>"+"<br/>")
    ++x
}
*/


var x=0;
while (x<=100){
    var idNumber =Math.random() * 99999;
    console.log(idNumber.toFixed()+" ")
    ++x
}
