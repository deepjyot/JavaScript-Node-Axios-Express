const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const router = require('./routes/api/members');
const exphandle = require('express-handlebars');
//Init express
const app = express();

// create own handler
// app.get('/', (req, res) => { 
//     // res.send('Hello word');
//     // res.end();
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// set static folder, include middleware
// app.use(express.static(path.join(__dirname, 'public')));
  
//Init middleware: can modify request and response object
// app.use(logger);

//Handlebars middleware
app.engine('handlebars', exphandle({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Homepage route
app.get('/', (req, res) => res.render('index'));

app.use('/api/members', router)
// app.use(router); // if router file has ful path specified

const PORT = process.env.PORT || 3000; // if we type export PORT = x in terminal then the process env's PORT vaue is set to x
app.listen(PORT, () => console.log(`Server started on ${PORT}`));

