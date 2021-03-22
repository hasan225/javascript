var names =["joy","bijoy","jui","rahat","rakib"]

// 1 value index together with ` `

names.forEach(function(values,index){
    console.log(`index:${index} & value :${values}`)
    });

// 2 just index

names.forEach(function(values,index){
    console.log(index)
})


// 3 just values
names.forEach(function(valuess){
    console.log(valuess)
})

// 4 just array

names.forEach(function(values,index,array){
     console.log(array)
})
