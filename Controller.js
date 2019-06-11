Contact = require('./Model');

// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, cars) {
        if (err) {
            res.json({
                status: "Ops something went wrong!",
                message: err,
            });
        }
        res.json({
            status: "success",
            data: cars
        });
    });
};