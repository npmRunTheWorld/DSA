import { basicFindStudent } from "./Basics/arrayIteration.js";
import CustomArray from "./classes/CustomArray.js";

basicFindStudent(undefined, 'bob');

const myArr = new CustomArray();
myArr.push(5);
myArr.push(7);
myArr.push(99);

//myArr.shift();
//myArr.getData();
//myArr.unshift(25);
//myArr.delete(1);

console.log(myArr);
