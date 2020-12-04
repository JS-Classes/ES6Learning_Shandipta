// // if..else if..else

// let x =3;
// if(x<=3){

// }
// else if(x>3){

// }
// else{

// }


// //Switch
// let y = "b";
// switch(y)
// {
//     case "a":
//         break;

//     case "b":
//     case "c":
//          break;

//       default:
// }

// //Loops

// for(let i=0; i<10; i++){

//     console.log(i+1);

// }

// let i =0;
// while(i<10){
//     console.log(i+1);
//     i++;
// }

// let a =0;
// do{
//     console.log(a+1);
//     a++;
// }
// while(a<10);


// let ary = [1,2,3,4,5];
// for(let arr of ary){ //arr is a loop variable
//     console.log(arr);
// }


//break, continue : label

// for(let x=0; x<5; x++){
//     if(x==3){
//         break;
//     }
//     console.log(x);
// }

//=== means strict equals to

// // returns true
// if("2"==2){
//     console.log("True");
// }

// else console.log("False");

// //return false
// if("2"===2){
//     console.log("True");
// }

// else console.log("False");

outer: //outer is a label
for(let x=0; x<5; x++){
    inner:
    for(let y=0; y<5; y++){
        if(x===3 && y===3){
            break outer;

    }
    console.log(`x=${x} y=${y}`)
    
    }
}