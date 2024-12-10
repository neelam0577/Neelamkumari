// // console.log('--------Welcome in JS---------');

// // //assume user enter number N = ?
// // // print numbers in reverse orde from : N to 1
// // //input from user : prompt:

// // const number1 = prompt("Enter Number");            
// // //prompt ----> take input from user
// // //input store in left side variable ---N
// // // print numbers in reverse orde from : N to 1

// // const N = prompt("Enter Number");
// // if (N > 0) {
// //     for (let i = N; i >= 1; i--){
// //         console.log(i);
// //     }
// // } else {
// //     console.log(" invalid number");
// // }

// //DOM:
// //get element by id:
// // const h1 = document.getElementById("h1");

// // console.log(h1);

// // //new content
// // const newcontent  = "HEELO WORLD";

// // //assign newcontent to tag:
// // h1.innerText = newcontent;

// //DOM:

// //get elements by class:
// const h2 = document.getElementsByClassName("h2");

// console.log(h2[0]);

// //new content
// const newcontent2 = "HELLO WORLD";

// //assign newcontent to tag:
// h2[0].innerText = newcontent2;
 

// const elements = document.getElementsByClassName("heading");

// console.log(elements);

//  const newcontent = " HELLO NEW WORLD";


// for (let i = 0; i < elements.length; i++){
//   elements[i].inerText= newcontent;
//  }

//assume we have multiple elements have same classname : eg - heading
//problem statement :
// by default content of each will be empty : eg <p> </p>
//you have to add content in such a way so that : element present
//at even index -- should have value = "EVEN" and 
//for odd index --- value = "ODD"



 document.querySelector("heading");
 document.querySelectorAll("heading");

document.getElementsByTagName("heading");


  if (index % 2 === 0) {
    element.textContent = "EVEN";  // For even index, set content to "EVEN"
  } else {
    element.textContent = "ODD";   // For odd index, set content to "ODD"
  ;