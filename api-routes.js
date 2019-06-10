// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
var Controller = require('./Controller');
router.route('/')
    .get(Controller.index)

// Export API routes
module.exports = router;