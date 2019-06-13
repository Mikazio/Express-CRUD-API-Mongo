// Initialize express router
let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'Express API is still Working',
        message: 'Expose today is cars',
    });
});
var Controller = require('../Controller/Controller');
router.get('/get/cars',Controller.index)
router.get('/page/cars', Controller.paginations)
module.exports = router;