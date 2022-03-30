const User = require('../models/user');
const bcrypt = require('bcryptjs');
require('dotenv').config();
// const jwt = require('jsonwebtoken');


async function register(req, res){
    try {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password, salt)
        await User.create({...req.body, password: hashed})
        res.status(201).json({msg: 'User created'})
    } catch (err) {
        res.status(500).json({err});
    }
};


async function login(req,res){
    try {
        const user = await User.findByEmail(req.body.email)
        if(!user){ throw new Error('No user with this email') }
        const authed = bcrypt.compare(req.body.password, user.passwordDigest)
        if (!!authed){
            res.status(200).json({ user: user.username })
        } else {
            throw new Error('User could not be authenticated')  
        }
    } catch (err) {
        res.status(401).json({ err });
    }
};


module.exports = {register, login};

/*
const express = require('express');
const router = express.Router();

// auth&auth requires
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(req.body.password, salt)
        await User.create({...req.body, password: hashed})
        res.status(201).json({msg: 'User was created successfully!'})
    } catch (err) {
        res.status(500).json({err});
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByEmail(req.body.email)
        if(!user){ throw new Error('No user found with this email!') }
        const authed = bcrypt.compare(req.body.password, user.pass_digest)
        if (!!authed){
            const payload = { username: user.username, email: user.email }
            const sendToken = (err, token) => {
                if(err){ throw new Error('Error in token (JWT) generation!') }
                res.status(200).json({
                    success: true,
                    token: "Bearer " + token,
                });
            }
            jwt.sign(payload, process.env.SECRET, { expiresIn: 60 }, sendToken);
        } else {
            throw new Error('User could not be authenticated!')  
        }
    } catch (err) {
        console.log(err);
        res.status(401).json({ err });
    }
})

module.exports = router;
*/
