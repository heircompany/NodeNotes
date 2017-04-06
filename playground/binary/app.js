// Buffer converts values to binary - pass in value then encoding
// buffer defaults to UTF8
const buf = new Buffer('Hello', 'utf8');
// outputs hexidecimal, but it's stored as binary
console.log(buf);
// outputs the string
console.log(buf.toString());
// outputs an array of encoded characters in number form
console.log(buf.toJSON());
console.log(buf[2]);

// write over the buffer with new data (replace first 2 characters)
// most likely, will not use direct methods on Buffer - just receiving/ working with data
buf.write('wo');
console.log(buf.toString());

// using es6 to handle binary data
// NOT NODE - NOT SUPPORTED YET BY ALL VERSIONS OF NODE
// storing 8 bytes = 64 bits
const buffer = new ArrayBuffer(8);
// convert to 32 bit datastore, stores 2 numbers
const view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);
