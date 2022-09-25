import { Player } from "./class/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

const Nobel = new Player("Nobel", 27, "Bangladesh");

let sakib: IsPlayer;
sakib = new Player("Shakib", 38, "Bangladesh");

const players: IsPlayer[] = [];

players.push(Nobel);
players.push(sakib);

Nobel.name = "Shakib Khan"; //we can not change the value of a private property
Nobel.age = 35; //we can change the value of a property if it is public
Nobel.country = "England"; //we can not modify the value of a readonly property

console.log(Nobel.name); // we can not access the value of a private property
console.log(Nobel.age); // we can access the value of a private property
console.log(Nobel.country); // we can access the value of a private property

interface rectangleOptions {
  width: number;
  length: number;
}
function drawRectangle(options: rectangleOptions) {
  let width = options.width;
  let length = options.length;
}

let threeD_options = {
  width: 10,
  length: 20,
  height: 25,
};

drawRectangle({ width: 10, length: 20 });
drawRectangle({ width: 10, length: 20, height: 25 });
//showing error as we strictly define the structure of the object
drawRectangle(threeD_options);
//showing nothing! because we are passing the reference of a object. typescript will not strictly check it. if we pass the reference then typescript will just check all the property of interface is present at that reference or not
