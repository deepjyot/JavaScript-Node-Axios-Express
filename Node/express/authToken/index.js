const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({msg: 'Welcome'});
});

app.listen(5000, () => console.log('Server started on 5000'));

app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authdata) => {
        if(err) {
            res.sendStatus(403);
        }
        else {
            res.json({
                msg: 'Post',
                authdata
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
        id: 1,
        username: "Dj",
        email: 'dj@gmail.com'
    }
    jwt.sign({user: user}, 'secretkey',{expiresIn: '3000s'}, (err, token) => {
        res.json({token: token});
    });
});

//Format Of token
// Authorization: Bearer <access_token>

// Verify token: middleware functiom
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // check if not undefined
    if(typeof bearerHeader !== 'undefined') {
        //split at the space
        const bearer = bearerHeader.split(' ');
        //Get token from array
        const token = bearer[1];
        //Set token
        req.token = token;
        next();
    }
    else {
        //Forbiiden
        res.sendStatus(403);
    }
}