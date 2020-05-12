const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const Joi = require('joi');

function validate(body) {
    const schema = {
        name: Joi.string().min(3)
    }
    const result = Joi.validate(body, schema);
    return result;
}

//Gets all members
router.get('/', (req, resp)=> resp.json(members));

//Get single member, //Get request with param
router.get('/:id', (req, resp) => {
    //return false if absent or true if present
    const found = members.some(member => member.id === parseInt(req.params.id));
    console.log(req.params);
    // console.log(req.query); //for query params, use only for optional
    if(found) {
        resp.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        // resp.sendStatus(400);
        resp.status(400).json({ msg: `Member ${req.params.id} not found`});

    }
    // resp.send(req.params.id);
})

// Create Member via post request
router.post('/', (req, res) => {
    const { error } = validate(req.body)
    if(error) {
        return res.status(400).json({msg: 'Invalid name'});
    }
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email) {
        res.status(400).json({msg: 'Please enter a name and email'});
    }
    else {
        members.push(newMember);
        res.json(members);
    }
})

// Update member
router.put('/:id', (req, resp) => {
    // const result = validate(req.body)
    const { error } = validate(req.body)
    if(error) {
        return resp.status(400).json({msg: 'Invalid name'});
    }

    //return false if absent or true if present
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                resp.json({msg: 'Member updated', member});
            }
        });
    }
    else {
        // resp.sendStatus(400);
        resp.status(400).json({ msg: `Member ${req.params.id} not found`});

    }
    // resp.send(req.params.id);
})

//delete single member
router.delete('/:id', (req, resp) => {
    //return false if absent or true if present
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found) {

        resp.json({msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))});
    }
    else {
        // resp.sendStatus(400);
        resp.status(400).json({ msg: `Member ${req.params.id} not found`});

    }
    // resp.send(req.params.id);
})

module.exports = router;