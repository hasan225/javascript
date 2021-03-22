
let season =4

switch(season){
    default :
         season = "doesn't exist"
    break;
    case 0:
        season = "summer"
    break;
    case 1:
        season = "winter"
    break;
    case 3:
        season = "rainy"
    break;
    case 4:
        season = "spring"
    break;
    case 5:
        season = "The autumn"
    break;
    
}
console.log(season)


// 2 *another way*

//cases of days

const day= 888;
switch (day) {
    case 1: console.log("it's saturday");
    break;

    case 2:console.log("it's sunday");
    break;

    case 3 :console.log("it's monday");
    break;

    case 4 :console.log("it's tuesday");
    break;

    case 5 :console.log("it's wednesday");
    break;

    case 6 :console.log("it's thursday");
    break;

    case 7 :console.log("it's friday");
    break;

    default:console.log("day of judgement");
    break;
}

// 2 cases of entering
const whoCame="friends"

switch (whoCame) {
    case "teacher": console.log("hello teacher");
        break;
    case "student":console.log("hello student");
        break;
    case "headMaster":console.log("hello headmaster");
        break;
    case "friends":console.log("hey dude whats up!!");
        break;
        
    default: console.log("didn't come")
        break;
}

