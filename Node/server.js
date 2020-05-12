const http = require('http');
const server = http.createServer((req, res)=> {
    //req by client
    //res by server
    console.log(req.url);
    if(req.url === '/') {
        res.write('Hello from node');
        res.end()
        // res.end('<h1>Home</h1>'); //send response
    }
    else {
        res.write('Other domain');
        res.end(); 
    }
})
//server also an extension of EventEmitter
const Port = process.env.Port || 3000
server.listen(Port, () => {
    console.log('Server running');
}) //port 3000