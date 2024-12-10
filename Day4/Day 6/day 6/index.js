console.log("-----Welcome in js------");
    
//variables : Let,const,var:
document.write("hello world")
let a = 5;
console.log(a)
var b = 5;
console.log(b)
const c = 10;
console.log(c)
a = 9;
b = 5;
// c = 9;
a = "abc";
console.log(a);
if(a==5) {
    console.log("hello world im if condition");
    
} else {
    console.log("else condition");
}

//loops: for and while:
for(let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        if(i % 2 ===0) {
            sum = i%3 + i%2;
            console.log("sum of odd and even:",sum)
        }
    }
}
//while loop:
//let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
for(let i = 0; i < 10; i = i + 4 );
console.log(i);
 i = 0;
 while(i < 100 ){
    if(i% 2 === 0) {
        console.log("Even number", i);
    }
    i++
 }//
 let i = 100;
 while(i <1000) {
    if(i++)
        if(i%2===0)
            console.log("sm of all even number, i");
 }
