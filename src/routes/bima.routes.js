const express =require('express')

const router = express.Router();

const bimaController = require('../controllers/bima.controller');

//Retrieve all employees
router.get('/',bimaController.findAll);

//Create new employee
router.post('/',bimaController.create);

//Retrieve a single employee with id
router.get('/:id',bimaController.findById);

// Update a employee with id
router.put('/:id', bimaController.update);
//patch an employee with id
router.patch('/:id', bimaController.update);
// Delete a employee with id
router.delete('/:id', bimaController.delete);
module.exports = router