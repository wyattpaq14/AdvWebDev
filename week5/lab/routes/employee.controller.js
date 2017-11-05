
var Employee = require('./employee.model');
var debug = require('debug')('lab:review');


module.exports.employeesReadAll = function (req, res) {

    debug('Getting all employees');
    Employee
        .find()
        .exec()
        .then(function (results) {
            sendJSONresponse(res, 200, results);
        })
        .catch(function (err) {
            sendJSONresponse(res, 404, err);
        });

};




module.exports.employeesCreate = function (req, res) {

    debug('Creating a review with data ', req.body);


    Employee.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department,
        startDate: req.body.startDate,
        jobTitle: req.body.jobTitle,
        salary: req.body.salary
    })
        .then(function (dataSaved) {
            debug(dataSaved);
            sendJSONresponse(res, 201, dataSaved);
        })
        .catch(function (err) {
            debug(err);
            sendJSONresponse(res, 400, err);
        });



};

module.exports.employeesReadOne = function (req, res) {

    if (req.params && req.params.reviewid) {
        debug('Getting single review with id =', req.params.reviewid);



        Employee
            .findById(req.params._id)
            .exec()
            .then(function (results) {
                sendJSONresponse(res, 200, results);
            }).catch(function (err) {
                sendJSONresponse(res, 404, {
                    "message": "employeeid not found"
                });
            });

    } else {
        sendJSONresponse(res, 404, {
            "message": "reviewid not found"
        });
    }
};

module.exports.employeesDeleteOne = function (req, res) {
    if (!req.params._id) {
        sendJSONresponse(res, 404, {
            "message": "Not found, employeeid is required"
        });
        return;
    }

    Review
        .findByIdAndRemove(req.params._id)
        .exec()
        .then(function (data) {
            debug("Employee id " + req.params._id + " deleted");
            debug(data);
            sendJSONresponse(res, 204, null);
        })
        .catch(function (err) {
            sendJSONresponse(res, 404, err);
        });




}



module.exports.employeesUpdateOne = function (req, res) {

    if (!req.params._id) {
        sendJSONresponse(res, 404, {
            "message": "Not found, employee id is required"
        });
        return;
    }

    Review
        .findById(req.params._id)
        .exec()
        .then(function (employeeData) {
            employeeData.firstName = req.body.firstName;
            employeeData.lastName = req.body.lastName;
            employeeData.department = req.body.department;
            employeeData.startDate = req.body.startDate;
            employeeData.jobTitle = req.body.jobTitle;
            employeeData.salary = req.body.salary;

            return employeeData.save();
        }).then(function (data) {
            sendJSONresponse(res, 200, data);
        })
        .catch(function (err) {
            sendJSONresponse(res, 400, err);
        });

};