function square(number){

   let sq =  number*number;
   return sq;
}

console.log(square(100));
let s = square(9);
console.log(s);

//anonymous function
var f1 =function (number){
    let s =  number*number;
    return s;
 }

 console.log(f1(10));

 //Closure
 function outside(x){
    function inside(y){
       return x+y;
    }
    return inside;
 }

 let inside_fn = outside(10);
 let result = inside_fn(20);
 console.log(result);

 function addSquare(a,b){
    function square(x){
       return x*x;
    }
    let sq = square(a)+square(b);
    return sq;
 }

 let sqResultOut= addSquare(2,2);
 console.log(sqResultOut);