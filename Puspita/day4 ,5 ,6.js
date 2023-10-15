                                 // Data Type Practice.............

//string and number
/*
let x = 16;
let y = "Zahid";
let z = x + y;

document.getElementById("demo").innerHTML 
= z;

let a ="Puspo" + 6 + 4;

document.getElementById("demo").innerHTML 
= a;
*/




// Javascript Quotetions
/*
let x ;
x = 'it is Puspita Rahman "Puspo"';
document.getElementById("demo").innerHTML
= x;


var a ;
a = "it's Puspita Rahman";
document.getElementById("demo1").innerHTML
= a;
*/



// Javascript Booleans
/*
let x , y , z;
x = 4;
y = 5;
z = 5;
document.getElementById("demo").innerHTML =(x == y) + "<br>" + (y == z); 
*/

//Javascript Array
/*
let a =["Shamima" , "Puspita" , "Nishat"];
document.getElementById("demo").innerHTML 
= a;
*/



//javascript Object
/*
const myObj = {
    name: "Puspita",
    age:21,
    color: "Black"
};
document.getElementById("demo").innerHTML ="My Name Is " + myObj.name + "<br>"
 + "I'm " + myObj.age + "year's old " + "<br>" + "My Favourite Color Is " + myObj.color;
*/

                                            //That All are I Run In Google Chrome....
                                            //javascript Function Learning...............

//function scope
/*
function myfunction(names , msg){
    console.log (names + "How Are" + msg);
}
myfunction("puspo " , " you?");
myfunction("Zahid ", " you?");
myfunction("Shamima ", " you?");
*/



/*
function myFunction(a, b) {
    
    return a * b;
}
let x = myFunction(4, 3);

console.log(x);

*/




// Use Function as a variable
/*
let text = "The temperature is " + toCelsius(77) + " Celsius.";
document.getElementById("demo").innerHTML = text;

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 
*/



//Function scope...
/*
let x = "puspo";

function myFunction(){
    let x = "zahid";
    console.log(x);
}
myFunction();
console.log(x);
*/


//Javascript Object.......

// let person = {
//     name : "Puspita" ,
//     Age : 21 ,
//     Height : 5.3 ,
//     Color: function(){
//         console.log("her fav color is black");
//     }
// }
// console.log(person.color);
// console.log(person.name);
// person.Color();




                                      // everything of javascript is an object...

// let x = new String("Puspita");
// console.log(x);


// let x = new Number(10);
// console.log(x);


                                                     //Javascript Events........



// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
//   }

                                                        




                                                        //Javascript Strings...........

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("demo").innerHTML = 
// text.length;




// let text = "We are the so-called \"Vikings\" from the north.";

// document.getElementById("demo").innerHTML = 
// text;





// let text = "We are the so-called \
// Vikings from the north.";
// document.getElementById("demo").innerHTML = 
// text;





// let a = "puspita";
// let b = new String("Rahman");
// let c = a == b;
// document.getElementById("demo").innerHTML = 
// c;




// let a = "puspita";
// let b = new String("Puspita");
// let c = a === b;
// document.getElementById("demo").innerHTML = 
// c;



                                              //String Methods.........
//Slice method
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7,13);
// document.getElementById("demo").innerHTML = part; 



//Substr method
// let text = "Apple, Banana, Kiwi";
// let part = text.substring(7,13);
// document.getElementById("demo").innerHTML = part; 



//Replace Method
// let a = "I Love Zahid";
// let hate = a.replace("Love" , "Hate");

// document.getElementById("demo").innerHTML = hate; 


 


//uppercase method
// let a = "I Hate Zahid";
// let hate = a.toUpperCase();
// document.getElementById("demo").innerHTML = hate; 








// Lowercase Method
// let a = "I Hate Zahid";
// let hate = a.toLowerCase();
// document.getElementById("demo").innerHTML = hate; 





//Concat Method
// let a = "I Hate";
// let b = "Zahid";
// let c = a.concat(" " , b);
// document.getElementById("demo").innerHTML = c; 




//Trim Method
// let a = "       I Hate Zahid         ";
// let hate = a.trim();
// document.getElementById("demo").innerHTML = hate; 



//Charat method
// let a = "I Hate Zahid";
// let hate = a.charAt(4);
// document.getElementById("demo").innerHTML = hate; 



//Charcodeat method (Unicode Definer)
// let a = "I Hate Zahid";
// let hate = a.charCodeAt(4);
// document.getElementById("demo").innerHTML = hate; 


                                                        // String Search Method

// //indexOf
// let a = "I Am Puspo";
// let b = a.indexOf("Puspo");
// document.getElementById("demo").innerHTML = b; 



//LastindexOf
// let a = "I I Am Puspo";
// let b = a.lastIndexOf("I");
// document.getElementById("demo").innerHTML = b; 




//Search 
// let text = "Please locate where 'locate' occurs!";
// let index = text.search("locate");
// document.getElementById("demo").innerHTML = index; 



//Match (local)
// let text = "The rain in SPAIN stays mainly in the plain";
// const myArr = text.match("ain");
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;




//Match (Global)
// let text = "The rain in SPAIN stays mainly in the plain"; 
// const myArr = text.match(/ain/g);
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;



//Global and case-insensitive
// let text = "The rain in SPAIN stays mainly in the plain"; 
// const myArr = text.match(/ain/gi);
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;



//includes 

// let text = "The rain in SPAIN stays mainly in the plain"; 
// let myArr = text.includes("rain");
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;




// includes 

// let text = "The rain in SPAIN stays mainly in the plain"; 
// let myArr = text.includes("rain" , 12);
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;



// includes 

// let text = "The rain in SPAIN stays mainly in the plain"; 
// let myArr = text.startsWith("The");
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;




// let text = "The rain in SPAIN stays mainly in the plain"; 
// let myArr = text.startsWith(" " , 3);
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;




//endsWith

// let text = "The rain in SPAIN stays mainly in the plain"; 
// let myArr = text.endsWith("e" , 3);
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;



                                                   



                                                  //Javascript Template literale.....
//Back-Tics

// let x =`I'm "Puspita.
// My Fav Color Is Black"`;
// document.getElementById("demo") .innerHTML = 
// x;





// let name =`Puspita`;
// let y =`i am ${name}. and full name puspita rahman puspo`;
// document.getElementById("demo") .innerHTML = 
// y;





// let name =`Puspita`;
// let x = 20;
// let z = 1;
// let y =`i am ${name}. and full name puspita rahman puspo . I'm ${x + z} years old`;
// document.getElementById("demo") .innerHTML = 
// y;






                                            //Javascript Number
//exponent
// let x = 5e-2;

// document.getElementById("demo").innerHTML =
// x;




//precision

// let x = (0.2 *10 + 0.1 *10) / 2;

// document.getElementById("demo").innerHTML =
// x;




//Neueric String

// let a = "100";
// let b = "10";
// let x = a / b;

// document.getElementById("demo").innerHTML =
// x;


//Not A Number , NaN

// let a = "fhfh";
// let b = "10";
// let x = a / b;

// document.getElementById("demo").innerHTML =
// x;



// Infinity Number

// let myNumber = 2; 
// let txt = "";
// while (myNumber != Infinity) {
//    myNumber = myNumber * myNumber;
//    txt = txt + myNumber + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;



//hexadecimal
// let x = 0xff;
// document.getElementById("demo").innerHTML =
//  x;



//convert with toString method
// let myNumber = 32;
// document.getElementById("demo").innerHTML =
// "Decimal 32 = " + "<br><br>" + 

// "Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
// "Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
// "Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
// "Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
// "Decimal (base 10): " + myNumber.toString(10) + "<br>" +
// "Octal (base 8): " + myNumber.toString(8) + "<br>" +
// "Binary (base 2): " + myNumber.toString(2);