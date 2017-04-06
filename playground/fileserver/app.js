const fs = require('fs');
const zlib = require('zlib');

// // synchronous file read is great for configuration / initialization files
// const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// console.log(greet);
//
// // BLOCK!!!!
//
// // asynchronous file reads are great for end user applications and scaling
// // error first callbacks
// const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
//     // buffer is returned by default
//     console.log(data);
// });
//
// // this will finish before the async
// console.log('done');

// create 64KB buffer and start gathering data
// receive parts of file as buffer processes data stream
// highWaterMark can change buffer size - it's in bits. below example is 64 kilobytes
const readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 32*1024});

// create writable streams
const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
const compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// compress file and zip in chunks
const gzip = zlib.createGzip();

// when ready, will emit an event and pass data from stream to listener
readable.pipe(writable);
// pipe is available again on another readable stream - chain methods
readable.pipe(gzip).pipe(compressed);
