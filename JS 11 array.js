// 1 nested array

var car = ["toyota", "3500000", ["bangladesh", "pakistan", "iran"], "red", ["black", "white", "silver", ["silver gray", "silver black", "silver white"], "red"], "japan"]
console.log(car[2][0])


// 2 second way to create array

var employees = Array(
    "bijoy",
    ["saiful", "imtiaz", ["marup", "anis", "mihun", "ismail"], "durjoy", "iqbal", "akbor"],
    "joy",
    "jui",
    "rahat",
    "rakib"
)
console.log(employees[1][2][2]);


// 3 third [modifiable] way to create array

var clients = [];
clients[0] = "clark"
clients[1] = "jonathon"
clients[2] = ["joseph", "hams", "william", "marko"]
clients[3] = "mac"



    +



    console.log(clients[2][3])

// 4 creating object inside array

var bio = [];

bio["name"] = "bijoy";
bio["hobby"] = ["playing", "eating", "watching", "traveling", "exploring"]
bio["age"] = 21;
bio["address"] = "noakhali"
bio["designation"] = "student"

console.log(bio["hobby"])
//console.log("hobby")


// 5 connecting 2 arrays [3 with 5]

var hobbies = [];
hobbies["likes"] = "playing";
hobbies["does"] = "meeting";
hobbies["snack"] = "pizza";

clients["hisHobbies"] = hobbies;
console.log(clients["hisHobbies"])

// 6

var bioData=[]

bioData[0]=

{name:'bijoy',
    age:'21',
    designation:'unemployed',
    isActive:true
}
bioData[1]=
{name:'joy',
    age:'23',
    designation:'uniStudent',
    isActive:false
}

bioData[2]={
    name:"jui",
    age:15,
    designation:"school",
    isActive:true,
}
bioData[3]={
    name:"rahat",
    age:19,
    designation:"employee",
    isActive:true,
}

console.log(bioData)
console.log(bioData.length)


console.table(bioData)