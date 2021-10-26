'use strict';

var dbConn =require('../../config/db.config');
//Bima  object create 

var Bima=function(bima){

  this.first_name     = bima.first_name;
  this.last_name      = bima.last_name;
  this.email          = bima.email;
  this.phone          = bima.phone;
  this.occupation   = bima.occupation;
  this.kra_pin    = bima.kra_pin;
  this.intermidiary_name_ira = bima.intermidiary_name_ira;
  this.cover_period = bima.cover_period;
  this.type_of_cover = bima.type_of_cover;
  this.vehicle_class = bima.vehicle_class;
  this.vehicle_registration = bima.vehicle_registration;
  this.chassis_number = bima.chassis_number;
  this.body_type = bima.body_type;
  this.vehicle_model = bima.vehicle_model;
  this.number_of_passengers = bima.engine_number;
  this.engine_number = bima.engine_number;
  this.sum_insured_for_comprehensive_only = bima.sum_insured_for_comprehensive_only;
  this.year_of_manufacture = bima.year_of_manufacture;
  this.limits_of_liability = bima.limits_of_liability;
  this.premium_payable = bima.premium_payable;
  this.payment_proof = bima.payment_proof;
  this.policy_number = bima.policy_number;
  this.vehicle_make = bima.vehicle_make;

  //this.date = new Date();
 


};

Bima.findById = function (id, result) {
dbConn.query("Select * from Bima where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};


Bima.create=function(newEmp,result){
    dbConn.query("INSERT INTO Bima set ?", newEmp,function(err,res){
        if(err){
            console.log("error:",err);
            result(err,null);
        }
        else{
            console.log(res.insertId);
            result(null,res.insertId);
        }
    });
};


Bima.findAll =function(result){
    dbConn.query("SELECT* from Bima", function(err,res) {

        if(err){
            console.log("error:",err);
            result(null,err);
        }else{
            console.log('Bima:',res);
            result(null,res);
        }
        
    });
};

Bima.update =function(id,bima,result){
dbConn.query(
  "UPDATE Bima SET first_name=?,last_name=?,email=?,phone=?,occupation=?,kra_pin=?, intermidiary_name_ira=? ,cover_period=?,type_of_cover=?,vehicle_class=?, vehicle_registration=?,chassis_number=?,body_type=?,vehicle_model=?,number_of_passengers=?,engine_number=?,sum_insured_for_comprehensive_only=?,year_of_manufacture=?,limits_of_liability =?,premium_payable =?,payment_proof =?,policy_number=?,vehicle_make=? , WHERE id = ?",
  [
  bima.first_name,
  bima.last_name,
  bima.email,
  bima.phone,
  bima.occupation,
  bima.kra_pin,
  bima.intermidiary_name_ira,
  bima.cover_period,
  bima.type_of_cover,
  bima.vehicle_class,
  bima.vehicle_registration,
  bima.chassis_number,
  bima.body_type,
  bima.vehicle_model,
  bima.engine_number,
  bima.engine_number,
  bima.sum_insured_for_comprehensive_only,
  bima.year_of_manufacture,
  bima.limits_of_liability,
  bima.premium_payable,
  bima.payment_proof,
  bima.policy_number,
  bima.vehicle_make,
    
    id,
  ],
  function (err, res) {
    if (err) {
      console.log("error:", err);
      result(null, err);
    } else {
      result(null, res);
    }
  }
);   
};

Bima.delete = function(id, result){
dbConn.query("DELETE FROM Bima WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

Bima.patch = ( id, data) => {
    if (Object.keys(data).length === 0) return null; // Or return what you want
    let query = `UPDATE Bima SET `;
    query += Object.keys(data).map((key) => {
        const valueToSet = typeof data[key] === 'string' ? `'${data[key]}'` : data[key];
        return `${key}=${valueToSet}`;
    }).join(', ');
    return query + ` WHERE id=${id};`;
}

// Employee.patch =function(id,result){
//     dbConn.query("UPDATE FROM employees SET")
// }

module.exports= Bima;