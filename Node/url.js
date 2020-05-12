const url = require('url');
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host
console.log(myUrl.host);

//Host name
console.log(myUrl.hostname) // does not get the portname

//Path name
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params obj
console.log(myUrl.searchParams);

//Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through
myUrl.searchParams.forEach((value,name)=> console.log(`${name}: ${value}`));
