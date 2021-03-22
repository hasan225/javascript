/*
var student1={
   name :"bijoy",
   grade :"13th",
   place :"chittagong"
   
}
var student3={
    name :"joy",
    grade :"16th",
    place :"dhaka"
    
 }
 var student2={
    name :"jui",
    grade :"9th",
    place :"noakhali
    
 }
 */
function students(name,grade,place){
    this.name=name;
    this.grade=grade;
    this.place=place;
}
var student1=new students("bijoy",12,"chittagong")
console.log(student1.name)
console.log(student1.grade)