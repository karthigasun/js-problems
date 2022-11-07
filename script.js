// let string="abc def",count;
// count=string.split(" ");
// console.log(count);
// console.log(count.length);

// let arr=[3,0,2,6,0,0],arr1=[],arr2=[],arr3;
// for(i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         arr1.push(arr[i]);
//     }
//     else{
//         arr2.push(arr[i]);
//     }
// }
// console.log(arr1);
// console.log(arr2);
// arr3=arr1.concat(arr2);
// console.log(arr3);

let arr=[
    {first_name:"aaa",last_name:"bbb"},
    {first_name:"aa",last_name:"bb"},
    {first_name:"a",last_name:"b"}
];
arr.filter(function name(a) {
    if(a.first_name=="a"){
        console.log(a);
    }
});
// let a=[1,2],b=[6,7],c;

// c=a;
// a=b;
// console.log(a);
// console.log(c);

// numi=parseInt(prompt("Enter the number"));

// if(numi==2||numi==5||numi==7){
//     console.log("prime number" + numi);
// }
// else if(numi%2!==0||numi%3!==0||numi%5!==0||numi%7!==0){
//     console.log("prime number" + numi);
// }
// else{
//     console.log("not a prime number" + numi);
// }

// let word="level",wor1="";

// for(i=word.length-1;i>=0;i--){
//     wor1+=word[i];
// }
//     //console.log(wor1);
//     if(word==wor1){
//         console.log("palindrome",word);
//     }
//     else{
//         console.log("not palindrome",word);
//     }
let arr2=[3,0,2,6,0,0];
arr2.splice(1,1);
console.log(arr2);

//Destructuring
let a,b,rest;
[a,b,...rest]=[1,2,4,5,6];
console.log(a);
console.log(b);
console.log(rest);

var Employee =
{
company: 'xyz'
}
var Emp1 = Object.create(Employee);
console.log(Employee);
delete Employee.company ;
console.log(Employee);
var x;
function my(x){
    
    delete x;
    return x;
    
}
my(0);
console.log(x);



























