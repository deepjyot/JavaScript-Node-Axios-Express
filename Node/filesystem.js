const fs = require('fs');
// These functions will callback are async, those almost always have sync versions too
//create a file, writeFile overrides the existing content
fs.writeFile('example.txt', 'This is an example', (err)=> {
    if(err) {
        console.log(err);
    }
    else {
        console.log('File successfully created');
        //readFile uses a full buffer
        fs.readFile('example.txt','utf8', (err, file) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log(file);
            }
        })
    }
});

//rename file
// fs.rename('example.txt', 'file.txt', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Rename is succesful');
//     }
// });

//append data to file
// fs.appendFile('file.txt', '\nAppended data', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Append successful');
//     }
// });

//delete file
// fs.unlink('file.txt', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('File delete succesful');
//     }
// });

// Working with folders
//Creating new folder
// fs.mkdir('Folder', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('New folder created');
//     }
// });

//Deleting
// fs.rmdir('Folder', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('New folder deleted');
//     }
// });

//Add file to folder
// fs.mkdir('Folder', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         //create new file if folder creation was succesful
//         console.log('New folder created');
//         //gotta give complete path
//         fs.writeFile('./Folder/FileFolder.txt', '123', (err)=> {
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('File create succesful');
//             }
//         })
//     }
// });

//Delete folder with a file
//Cant use rmdir, it can be used only if folder empty

//gotta delete the file first and then the folder
// fs.unlink('./Folder/FileFolder.txt', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('File delete succesful');
//         fs.rmdir('Folder',(err)=> {
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Folder delete successful');
//             }
//         });
//     }
// })

//multiple files in folder
// fs.readdir('folder', (err, files)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         //files is an array of contents of folder
//         for(const f of files) {
//             fs.unlink(`./folder/${f}`, (err)=> {
//                 if(err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log("Deleted a file");
//                 }
//             }
//         )};
//     }
// });

// fs.rmdir('folder',(err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Folder delete successful');
//     }
// });