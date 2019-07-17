const express = require('express');
const router = express.Router();
//get a list of pratiks from the database
router.get('/pratiks', function(req, res){
    res.send({type:'GET'})

});
router.post('/pratiks', function(req, res){
    console.log(req.body);
    res.send({
        type:'POST',
        name: req.body.name,
        rank: req.body.rank
    })

});
router.put('/pratiks/:id', function(req, res){
    res.send({type:'PUT'})
});
router.delete('/pratiks/:id', function(req, res){
    res.send({type:'DELETE'})
});

module.exports = router;