Contact = require('./Model');

// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, test) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "data retrieved successfully",
            data: test
        });
    });
};