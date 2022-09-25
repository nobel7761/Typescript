//Generics

/* const addID = <T>(obj: T) => {
  const id = Math.floor(Math.random() * 100);
  return {...obj, id }
}

let user = addID({
  name: "Nobel",
  age: 27
})

user.age;
user.id;
user.name; */

/* 
================================================================
*/

/* const addID = <T>(obj: T) => {
  const id = Math.floor(Math.random() * 100);
  return {...obj, id }
}

let user = "Nobel"

addID(user); */

/* 
================================================================
*/

/* const addID = <T extends {name: string, age: number}>(obj: T) => {
  const id = Math.floor(Math.random() * 100);
  return {...obj, id }
}

let user = addID({
  name: "Nobel",
  age: 27
})

user.age;
user.id;
user.name; */

/* 
================================================================
*/

interface APIResponse {
  status: number;
  type: string;
  data: object;
}

const response1: APIResponse = {
  status: 200,
  type: "success",
  data: "Nobel",
};
