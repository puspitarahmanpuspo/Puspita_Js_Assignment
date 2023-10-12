                                           //Second Day Assignment 11-10-2023

// Variable redeclaring.......
var  x = 10;
{  
var x = 2;
}

document.getElementById("Redec").innerHTML
= x;

//Variable Redeclaring anywhere.....
var y = 2;
var y = 3;
document.getElementById("Redecvar").innerHTML
 = y;  

//Redeclaring let .......
 /*let  z = 10;
{  
  let z = 2;
}
document.getElementById("Redec1").innerHTML 
= z; */



//((js hoisting)) javascript can declared variable anywhere,, not only before inserting values of this. it also declared after insert var value
myName = "Puspo";
document.getElementById("hoist").innerHTML = myName;
var myName;

