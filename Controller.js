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

//handle pagination request
exports.paginations = async function(req, res) {
    try{
        const cars = await Contact.paginate();
        return res.json(cars);
    } catch(err){
        console.log(err);
        return res.status(500).send(err);
    }
};