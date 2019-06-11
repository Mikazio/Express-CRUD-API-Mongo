// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'Express API is still Working',
        message: 'Expose today is cars',
    });
});
var Controller = require('./Controller');
router.route('/get/cars')
    .get(Controller.index)

// Export API routes
module.exports = router;