// // 1. Program to print multiplication table for a number

// // function PrintMultiplicationTable(y){
// // for(let x =1; x<=10; x++){
    
// //     console.log(`${y}*${x} =${y*x}`);
// // }
// // }

// // PrintMultiplicationTable(10);

// // 2. Program to print multiplication table for a number upto some range (default should be 10)
//  function PrintMultiplicationTableWithRange(y, r=10){
//      for(let x =1; x<=r; x++){
        
//         console.log(`${y}*${x} =${y*x}`);
//         if(r==6)   
//         continue; 
       
//      }
//   }
//   PrintMultiplicationTableWithRange(2,6);

// // 3. Program to print multilication table for numbers from m to n

// //  function printMultiplicationOfNtoM(m,n, r=10){

// //   for(let x=m; x<=n; x++){
// //  {
// //      for(let a=1; a<=r; a++){

// //          console.log(`${x}*${a} = ${x*a}`);

// //     }
// //      console.log("\n");
// //         }
// //   }
// // }
// //  printMultiplicationOfNtoM(1,5,3);
// //  printMultiplicationOfNtoM(1,5,);


// //Find random number between m and n 

// function randomNumber(m,n){
//    return m+Math.random()*(m-n);
// }
   
// let getRandom = (m,n)=> m+Math.random()*(m-n);
// var s = randomNumber(1,8);
// //console.log(s);
// //console.log(getRandom(1,2));

// Find a 

function GaussianDistributionFormula(mean, sd, x)
{
   let result = 1/(sd*Math.sqrt(2*3.14))*Math.exp((-1/2)*(Math.pow((x-mean)/sd),2));
   console.log(result);
}
GaussianDistributionFormula(2,3,3);


//Print random strings
function PrintRandomString(strLengthToPrint,str) {
   var printResult='';
   var totalStrCount = str.length;
   for ( var i = 0; i < strLengthToPrint; i++ ) {
     
      printResult += str.charAt(Math.floor(Math.random() * totalStrCount));
   }
   return printResult;

}
console.log(PrintRandomString(5,'fsdfds3132242fsdf'));
