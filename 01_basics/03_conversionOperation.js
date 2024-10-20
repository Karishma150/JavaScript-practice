let score = 33;

console.log(typeof (score)); //number
console.log(typeof score); //number

//If we send 33 as a string
let score = "33";

console.log(typeof (score)); //string ;  whenever we console.log to know the typeof of value it is written in lowercase.
console.log(typeof score); //string

//what if we want typeof 33 to be only no. So,
let valueInNumber = Number(score); //to define type the first letter is capital here.
console.log(typeof valueInNumber); //number
//If we change value of score 
1.
let score = "33abc"
console.log(typeof score); //string
let valueInNumber = Number(score); 
console.log(typeof valueInNumber);//number ; it should not show no.
console.log(valueInNumber);//NaN ; it is also a type
2.
let score = null
console.log(typeof score); //object
let valueInNumber = Number(score); 
console.log(typeof valueInNumber);//number ; it should not show no.
console.log(valueInNumber);//0

3.
let score = undefined
console.log(typeof score); //undefined
let valueInNumber = Number(score); 
console.log(typeof valueInNumber);//number ; it should not show no.
console.log(valueInNumber);//NaN

//33 => 33
//"33abc" => NaN
//true => 1 ; false => 0
                 1.  2.   3.
let isLoggedIn = 1;  "" ; "kannu"
let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn); //true  //false   //true
////
let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber) //string; it looks like no. but is changed to string. 
