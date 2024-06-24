// reading files
 const fs  = require('fs');

fs.readFile('./Documents/blog1.txt', (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());

});

console.log('last line')

// writing files

fs.writeFile('./Documents/blog2.txt','Hello world here basically it created a new file, if it is a old file then it will replace the data inside',() =>{
    console.log('file has been written');   
});

//directories
// create and delete directories using the fs module

if (!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) =>{
        if (err){
            console.log(err);
        }
        console.log('folder has been created');
    
    });
} else {
    fs.rmdir('./assets',(err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder has been deleted')

    });
}


// deleting files

if(fs.existsSync('./Documents/deleteme.txt')){
    fs.unlink('./Documents/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('File has been deleted');
    });
} 





