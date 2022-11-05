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
let a=[1,2],b=[6,7],c;

c=a;
a=b;
console.log(a);
console.log(c);