var express = require('express');
var router = express.Router();
var ctrlHome = require('./employee.controller');
var debug = require('debug')('lab:index');


router.get('/api/v1/employees', ctrlHome.employeesReadAll);
router.get('/api/v1/employees/:employeeid?', ctrlHome.employeesReadOne);
router.post('/api/v1/employees/create', ctrlHome.employeesCreate);
router.put('/api/v1/employees/update/:employeeid?', ctrlHome.employeesUpdateOne);
router.delete('/api/v1/employees/delete/:employeeid?', ctrlHome.employeesDeleteOne);

module.exports = router;
