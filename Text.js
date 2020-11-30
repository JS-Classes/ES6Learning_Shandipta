//String literal
let h = 'Hackathon 2020'
let name = `Cotiviti ${h} 
Cotiviti ${h}`; // ` supports placeholder ${} 
console.log(name);
let x ='X';
let y = 'Y';
let isMale = true;
let z = `${isMale?x:y}`;
console.log(z);

// Regex
let str = 'ssdf45547ryr423 53sdgds 464 6dgdfbvxc';
let re = /\d/; //\d matches any single digit (same as [0-9] )
let re1 = new RegExp('[0-9]');
let reDig= str.match(re);
console.log(reDig);
