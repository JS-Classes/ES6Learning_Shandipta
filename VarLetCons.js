var x = 1; //problem with var is it can be initialize again and again with different datatype
var x = "abc";

//var is function scope or global
function add()
{
 var aa = "Test";
}
//var can be hoisted
console.log(number);
var number = 23;
//declration not allowed but mutation allowed
// let y = 2;
// let y = "Yo"; // let and const donot allow to initialize same variable for different datatype

//no mutation allowed
// const a = true;
// a = false;

//let and const are block scoped
function add02(){

    var aa = "ac";
    //aaa is available only inside the if block.
    if(aa==""){
        let aaa="True";
    }

}