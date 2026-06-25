let arr=[1,2,3,4,5]
// let sum=0
// arr.forEach((val)=>{
//      if(val%2==0)
//          console.log(val)

// sum+=val
//  })
// console.log("sum="+sum)
// console.log("val * 3");

// let arr1=arr.map((val)=>{
//     return val*3
// })
// console.log(arr1);
// console.log("Odd number");

// let arr2=arr1.filter((val)=>{
//     return val%2 != 0
// })
// console.log(arr2);


// console.log("Multiplication");

// let arr3=arr2.reduce((a,b)=>{
//     return a*b ;
// })
// console.log(arr3);


let a=arr.map(val=>val*3).filter(val=>val%2 !=0).reduce((c,n)=>{return c*n})
console.log(a);
