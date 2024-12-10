// // console.log("------Welcome in JS-------");
// // //index (0,1,2,3,4,5,6):

// //  let arr =[ 1,44,3,77,6,4,5];
// //  // select element:

// //  const n4 = arr[3];
// //  console.log("4th value :",n4);

// //  // update element : at 5th position:

// //  arr.splice(5,1,999);

// //  console.log("--- updated array---:",arr);

// //  //delete element : at 4th psition:
// //  arr.splice(4,1);

// //  console.log("---array after deleted----:",arr);

// // remove specific element(k) from an array.eg: input: [1, 4, 5, 6, 73, 2, 4], k = 5 output: [1, 4, 6, 73, 2, 4]
// // let arr = [1, 4, 5, 6, 73, 2, 4];

// // const arr = [1, 4, 5, 6, 73, 2, 4];
// // const k = 5;

// // //get length of an array: arr.length:

// // for (let i = 0; i < arr.length; i++) {
// //     const arr_i = arr[i];
// //     if (arr_i === k) {
// //         arr.splice(i, 1);

// //     }
// // }

// // const arr = [1, 4, 5, 6, 73, 2, 4];

// // //Traversal:
// //  let count5 = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     const arr_i = arr[i]; // index - i - :0 1 2 3 4 5 6
// // if(arr_i === 5)
// // console.log("My array value :",arr_i);
// // }


// // const arr = [1,3,4,4,4,6,5];

// // let count4 = 0;
// // for(let i = 0; i < arr.length; i++){
// //     const arr_i = arr[i]; // index - i - : 0 1 2 3 4 5 6
// //     if(arr_i === 4)
// //         console.log("my array value :", arr_i);
// // } 


// //objects :
 
let student_id_card = {   // key : Value,
    name: "Neelam",
    rollnumber: "246060",
    address: "abc",
    branch: "c",
    dob: "1-1-2006",
};

// //select: two method : dot and square []:

// const myaddress = student_id_card.address;
// const myname = student_id_card["name"];
// const mybranch = student_id_card.branch;
// const mydob = student_id_card.dob;
// const myrollnumber = student_id_card.rollnumber;

// console.log(myaddress, myname,mybranch,mydob,myrollnumber);

//add new key : id
student_id_card.id = 77;

console.log(student_id_card);



student_id_card.rollnumber = 934793847;

console.log(student_id_card);

delete student_id_card.dob;

console.log(student_id_card);