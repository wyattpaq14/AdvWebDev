
var Review = require('./review.model');
var debug = require('debug')('demo:review');

module.exports.home = function (req, res) {

    if (req.method === 'POST') {

        var msg = '';

        Review.create({
            author: req.body.name,
            rating: req.body.rating,
            reviewText: req.body.review
        })
            .then(function () {
                msg = 'Review was Saved';
                return;
            })
            .catch(function (err) {
                msg = 'Review was not Saved';
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



    Review
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
        Review.remove({ _id: id })
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

        Review
            .findById(id)
            .exec()
            .then(function (reviewData) {
                // figure out why the data is not saving.        
                reviewData.author = req.body.name;
                reviewData.rating = req.body.rating;
                reviewData.reviewText = req.body.review;

                return reviewData.save();

            })
            .then(function () {
                msg = 'data has been updated';
            })
            .catch(function () {
                msg = 'data has NOT been updated';
            });

    }

    Review
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