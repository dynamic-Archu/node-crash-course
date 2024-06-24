// const xyz = require('./people')

const { people , ages} = require('./people')

// inorder to get many imports we use const { and add names here it need not to be the same name as in the other file 
// but how much ever value is given here only gets imported }

// console.log(xyz) // we will get it as objects 
// //  {
//     people: [ 'yoshi', 'yu', 'archu', 'viffy' ],
//     ages: [ 25, 30, 20, 20 ]
//   }

console.log(people, ages);

const os = require('os');
console.log(os);
console.log(os.platform(), os.homedir());

// console.log(xyz.people, xyz.ages)
// [ 'yoshi', 'yu', 'archu', 'viffy' ]
// [ 'yoshi', 'yu', 'archu', 'viffy' ] [ 25, 30, 20, 20 ]