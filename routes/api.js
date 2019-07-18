const express = require('express');
const router = express.Router();
const Pratik = require('../models/pratiks')
//get a list of pratiks from the database
router.get('/pratiks', function(req, res,next){
    Pratik.find({}).then(function(pratik){
        
    })
});
router.post('/pratiks', function(req, res,next){
    Pratik.create(req.body).then(function(pratik) {
        res.send({pratik});
    }).catch(next);
});
router.put('/pratiks/:id', function(req, res){
    Pratik.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Pratik.findOne({_id:req.params.id}).then(function(pratik){
            res.send(pratik);
        })
        
    })
    res.send({type:'PUT'})
});
router.delete('/pratiks/:id', function(req, res,next){
    Pratik.findByIdAndRemove({_id: req.params.id}).then(function(pratik){
        res.send(pratik);
    })
    res.send({type:'DELETE'})
});

module.exports = router;