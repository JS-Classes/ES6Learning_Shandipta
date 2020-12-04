// 1. Program to print multiplication table for a number

// function PrintMultiplicationTable(y){
// for(let x =1; x<=10; x++){
    
//     console.log(`${y}*${x} =${y*x}`);
// }
// }

// PrintMultiplicationTable(10);

// 2. Program to print multiplication table for a number upto some range (default should be 10)
 function PrintMultiplicationTableWithRange(y, r=10){
     for(let x =1; x<=r; x++){
        
        console.log(`${y}*${x} =${y*x}`);
        if(r==6)   
        continue; 
       
     }
  }
  PrintMultiplicationTableWithRange(2,6);

// 3. Program to print multilication table for numbers from m to n

//  function printMultiplicationOfNtoM(m,n, r=10){

//   for(let x=m; x<=n; x++){
//  {
//      for(let a=1; a<=r; a++){

//          console.log(`${x}*${a} = ${x*a}`);

//     }
//      console.log("\n");
//         }
//   }
// }
//  printMultiplicationOfNtoM(1,5,3);
//  printMultiplicationOfNtoM(1,5,);


