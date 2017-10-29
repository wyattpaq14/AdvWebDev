
var Employee = require('./employee.model');
var debug = require('debug')('lab:review');

module.exports.home = function (req, res) {

    if (req.method === 'POST') {

        var msg = '';

        Employee.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            department: req.body.department,
            startDate: req.body.startDate,
            jobTitle: req.body.jobTitle,
            salary: req.body.salary
        })
            .then(function () {
                msg = 'Employee was Saved';
                return;
            })
            .catch(function (err) {
                msg = 'Employee was not Saved';
                return err.message;
            }).then(function (err) {
                res.render('index', {
                    title: 'home',
                    message: msg,
                    error: err
                });
            });

    } else {
        res.render('index', {
            title: 'home',
            message: ''
        });
    }

};

module.exports.view = function (req, res) {



    Employee
        .find()
        .exec()
        .then(function (results) {
            res.render('view', {
                title: 'View Results',
                results: results
            });
        });




};

module.exports.delete = function (req, res) {
    var id = req.params.id;
    var removed = "";

    if (id) {
        Employee.remove({ _id: id })
            .then(function () {
                removed = `${id} has been removed`;
                finish();

            })
            .catch(function (err) {
                removed = `${id} has not been removed`;
                finish();
            });

    } else {
        //no id found
        finish();

    }

    function finish() {
        res.render('delete', {
            title: 'Delete Results',
            removed : removed
        });
    }


}



module.exports.update = function (req, res) {

    var id = req.params.id;
    var msg = '';

    if (req.method === 'POST') {

        id = req.body._id;

        Employee
            .findById(id)
            .exec()
            .then(function (employeeData) {
                // figure out why the data is not saving.        
                employeeData.firstName = req.body.firstName;
                employeeData.lastName = req.body.lastName;
                employeeData.department = req.body.department;
                employeeData.startDate = req.body.startDate;
                employeeData.jobTitle = req.body.jobTitle;
                employeeData.salary = req.body.salary;

                return employeeData.save();

            })
            .then(function () {
                msg = 'data has been updated';
            })
            .catch(function () {
                msg = 'data has NOT been updated';
            });

    }

    Employee
        .findOne({ '_id': id })
        .exec()
        .then(function (results) {
            res.render('update', {
                title: 'Update Results',
                message: msg,
                results: results
            });
        })
        .catch(function () {
            res.render('notfound', {
                message: 'Sorry ID not found'
            });
        });
};