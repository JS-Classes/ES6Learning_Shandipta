// function square(number){

//    let sq =  number*number;
//    return sq;
// }

// console.log(square(100));
// let s = square(9);
// console.log(s);

// //anonymous function
// var f1 =function (number){
//     let s =  number*number;
//     return s;
//  }

//  console.log(f1(10));

//  //non anonymous function
//  var f2 = function sqr(num){
//     let sq = num*num;
//     return sq;
//  }
//  console.log(f2(3));

// // Arrow function
// var f3 = (number) => number*number;
// var f4 = (a,b)=>{
//    let sum = a+b;
//    return sum;
// }
// console.log(f3(2));
// console.log(f4(1,1));

 //Closure
 //Example 1
 function outside(x){
    function inside(y){
       return x+y;
    }
    return inside;
 }

 let inside_fn = outside(10);
 let result = inside_fn(20);
 console.log(result);

// Example 2
function addSquares(a, b) {
   function square(x) {
       return x * x;
   }
   let result = square(a) + square(b);
  return result;

}
let r = addSquares(1,2);
console.log(r);

//Example 3
let createPet = function (name){
   return{
      setName: function(newName){

         name = newName;
      },
      getName: function(){
         return name;
      }
   }
}

let dog = createPet('Lolo');
 console.log(dog);

 //Example 4
let createPet02 = function(name){
   return{
      setName: newName=>name=newName,
      getName:()=>name
   }
}
let d= createPet('Lolo');
 console.log(d);

 //Parameters
 function fromatName(name,address,salutation='Miss.')
{
   let completeName = salutation+""+name+", "+address;
   return completeName;
}
let n = fromatName('AgustD','Korea','Mr.');
let n1 = fromatName('Anna','ktm');
console.log(n);
console.log(n1);

//Rest Parameter
function add(a, b, ...moreArgs){
   console.log(a);
   console.log(b);
   console.log(moreArgs);

}
add(1,2);
add(1,2,3,4,5);