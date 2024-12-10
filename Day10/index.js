// const h1 = document.getElementById("heading");
// function sumfun(a,b){
//     const sum = a + b;
//     console.log("sum:", sum);
//     h1.innerText += sum;
//     return sum;
// }

// function removecontent(){
//     h1.innerText = "";
// }


// const n1 = 5;
// const n2 = 6;
// console.log(n1);


// try {
//     n1 = 6;
// } catch (error) {
//      console.log(error.message);
//  }



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Internet problem");
    }, 300);
  });
  console.log(myPromise);

 myPromise
  .then((value) =>{
    console.log(value);
  })
  .catch((error) =>{
    console.log(error);
     })

console.log("promise start:");
const promiseFun = async () => {
    const value = await mypromise();
    console.log(value);
};
promiseFun();
console.log("promise end");