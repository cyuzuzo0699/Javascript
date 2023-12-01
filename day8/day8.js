//objects
let user1=[{
    name: "cyuzuzo",
    surname:"yvette",
    age:40,
},
// let user2=
{
    name:"Izere",
    surname:"Yvonne",
    age:18,
}];
console.log(user1[1].surname);
// console.log(user2.age);
// console.log(`${user2.name}`);
// delete user1.age;
// console.log(user1.age);

//Arrays

let days=["friday","mon","wed","saturday","sunday"];
console.log(days[1]);
console.log(days[4]);
days[2]="tue";
console.log(days);
console.log(days[2]);
console.log(typeof days);
console.log(days.length);
let a= days.slice(1);//slice
console.log(a);
let weeks=["week1","week2","week3"];
let weekdays=days.concat(weeks);
console.log(weekdays);
