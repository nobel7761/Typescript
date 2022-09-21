import { Player } from './class/Player.js';
const Nobel = new Player("Nobel", 27, "Bangladesh");
Nobel.name = "Shakib Khan"; //we can not change the value of a private property
Nobel.age = 35; //we can change the value of a property if it is public
Nobel.country = "England"; //we can not modify the value of a readonly property
console.log(Nobel.name); // we can not access the value of a private property
console.log(Nobel.age); // we can access the value of a private property
console.log(Nobel.country); // we can access the value of a private property
