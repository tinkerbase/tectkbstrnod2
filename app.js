let fs = require('fs');
let fileName = "hello.txt";
let message = "Hello World";

fs.appendFile(fileName, message + '\r\n', (err) => {
  if (err) throw err;
  console.log('The "' + message + '" was appended to file!');
});
