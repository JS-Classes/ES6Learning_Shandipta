const a = 0b01010; //0b to represent binary number
const b =0o12345; //0o to represent octa number
const c = 0x123F; //0x to represnt hexa number

//Number API
let age = "25";
let ageInNumber = parseInt(age); // globally available
let ageInNumber02 = Number.parseInt(age); // through Number object

console.log(typeof NaN);
console.log(Number.isNaN(age));
console.log(Number.isInteger(ageInNumber));
console.log(Number.isFinite(c));

//Math API
Math.abs(-89);
Math.pow();
let r = Math.random();
console.log(r); // 0 inclusive 1 exclusion

function stdNormalDistribution (x) {
    return Math.pow(Math.E,-Math.pow(x,2)/2)/Math.sqrt(2*Math.PI);
  }
var array = [12, 13, 14];
function GussianDistribution(x){

    return Math.pow()

}