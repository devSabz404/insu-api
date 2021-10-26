'use strict';
const Bima = require('../models/bima.model');





exports.findById = function(req, res) {
Bima.findById(req.params.id, function(err, bima) {
  if (err)
  res.send(err);
  res.json(bima);
});
};

exports.findAll =  function(req,res){

    Bima.findAll(function(err,bima){
        console.log('controller')
        if(err)
        res.send(err);
        console.log('res',bima);
        res.send(bima);
    });

};

exports.create = function(req,res){
    const new_policy = new Bima(req.body);

    //handles null error
    if(req.body.constructor ===Object && Object.keys(req.body).length===0){
        
        res.status(400).send({error:true, message:'Please provide all required fields'});}
        else{
            Bima.create(new_policy,function(err,bima){
                if(err)
                res.send(err);
                res.json({error:false,message:"Record added successfully!",data:bima});
            });
        }
    };


    exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Bima.update(req.params.id, new Employee(req.body), function(err, bima) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Record successfully updated' });
});
}
};

    exports.patch = function(req, res) {
  
    Bima.update(req.params.id, new Employee(req.body), function(err, bima) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Record successfully updated' });
});
}
;

exports.delete = function(req, res) {
Bima.delete( req.params.id, function(err, bima) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Record successfully deleted' });
});
};
