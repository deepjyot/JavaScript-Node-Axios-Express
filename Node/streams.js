const fs = require('fs');
//module for compression
const zlib = require('zlib');
//a transformed stream takes input, manipulates it, here compresses it
const gunzip = zlib.createGunzip();
const gzip = zlib.createGzip();
// const readSteam = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('copy.txt');
//has event emitter
// readSteam.on('data', (chunk)=> {
//     //does not use the entire buffer size
//     console.log(chunk);
//     //getting data in chunk, instead of immediately loading the whole file
//     writeStream.write(chunk);
//     //able to write to another file while reading from the first, the data is read in chunks instead of the entire file
// });

//pipes
// readSteam.pipe(writeStream);
//source: readstream, destination: writestream, pipes allow us to read from source and write to destination easily
//shorthand of doing what is done above

//pipe chaining
// const writeStream = fs.createWriteStream('copy.txt.gz');
//a compression file
// readSteam.pipe(gzip).pipe(writeStream);

//take a compressed source, uncompress it and write it
const readSteam = fs.createReadStream('./copy.txt.gz');
const writeStream = fs.createWriteStream('copy.txt');
readSteam.pipe(gunzip).pipe(writeStream);



