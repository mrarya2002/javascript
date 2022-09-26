let num=[2,4,6,77,4,6,34];

// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// for(let value of num){
//     console.log(value);
// }

// for(let key in num){
//     console.log(num[key]);
// }

// num.forEach((element)=>{
//     console.log(element);
// })

let arr=num.map((value,index,array)=>{
    return value+index;
    console.log(num);
})
console.log(arr);


let arr2=num.filter((value,index,array)=>{
    return value>20;
})
console.log(arr2);

let arr3=num.reduce((value1,value2)=>{
    return value1+value2;
})
console.log(arr3);