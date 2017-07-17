
const express = require('express');
const router = express.Router();


var Bear = require('../models/bear');
router.route('/')
.all((req,res,next)=>{
    if(!req.isAuthenticated()){
        res.status(401).json({"message":"not authenticated"});
    }
    else
    {
        next();
    }
})
.get((req,res)=>{
    Bear.find(function(err,bears) {
        if (err)
            res.send(err);
        res.json(bears);
    });
})
.post((req,res)=>{
    var bear = new Bear();
    bear.name = req.body.name;
    bear.save(function(err){
        if (err)
            res.send(err);
        res.json({message: 'Bear created!',body:req.body.name});
    })
});

router.param('bear_id',(req, res, next, id) => {
    Bear.findById(id,function(err,bear) {
        if (err)
        {
            next(err);
        }
        else if (bear)
        {
            req.bear = bear;
            next();
        }
        else
        {
            next(new Error('failed to load bear'));
        }
    });
});
router.route('/:bear_id')
.get((req,res)=>{
    res.json(req.bear);
})
.post((req,res)=>{
    req.bear.name = req.body.name;
    req.bear.save((err)=>{
        if(err)
            res.send(err);
        res.json({message:'Bear updated!',name:req.bear.name});
    });
})
.delete((req,res)=>{
    Bear.remove(req.bear,(err,bear)=>{
        if(err)
            res.send(err);
        res.json({message:'successfully deleted',bear:bear});
    })
});

module.exports = router;
