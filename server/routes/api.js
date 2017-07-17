
const express = require('express');
const axios = require('axios');
const router = express.Router();
let Account = require('../models/account');
let passport = require('passport');


router.get('/',(req,res)=>{
    res.send('api works');
});
const bears = require('./bears');
router.use('/bears',bears);

// Authentication code
router.post('/register', (req,res) => {
    Account.register(new Account({username:req.body.username}),req.body.password, (err,account)=>{
        if(err)
            res.status(400).json({'result':'err','message':err.message});
        passport.authenticate('local')(req,res,()=>{
            req.session.save((err) => {
                if (err)
                    next(err);
                res.json({message:'registered'})
            })
        })
    });
});
router.post('/login',passport.authenticate('local'),(req,res) => {
    req.session.save((err) => {
        if (err)
            next(err);
        res.status(200).json({message:'logged in'})
    })
});
router.post('/logout',(req,res)=>{
    req.logout();
    res.json({message:'logged out'});
});
router.get('/ping',(req,res) => {
    res.status(200).json({message:"pong!"});
});
module.exports = router;
