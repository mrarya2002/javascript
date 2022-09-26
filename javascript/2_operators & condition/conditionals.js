let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")

console.log("You can", (a<18? "not drive" :"drive"))

let b=prompt("enter the number")
b=Number.parseInt(b)

switch(b){
    case 1:
        console.log('you entered 1');
        break;
    case 2:
        console.log('you entered 2');
        break;    
    case 3:
        console.log('you entered 3');
        break;    
    default:
        console.log('chla ja')
}