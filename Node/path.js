const path = require('path');

// Base filename
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
var obj = path.parse(__filename);
console.log(obj);
console.log(obj.base)

// concatenate paths
console.log(path.join(__dirname, 'static', 'dog1.png'))