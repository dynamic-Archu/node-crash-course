// reading files
 const fs  = require('fs');

// fs.readFile('./Documents/blog1.txt', (err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());

// });

// console.log('last line')

// writing files
fs.writeFile('.//Documents/blog2.txt','Hello world here basically it created a new file, if it is a old file then it will replace the data inside',() =>{
    console.log('file has been written');   
});

