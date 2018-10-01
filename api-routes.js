// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import asset controller
var assetController = require('./controller/assetController');
var loginController = require('./controller/loginController');
// Asset routes
router.route('/assets')
    .get(assetController.index)
    .post(assetController.new);
router.route('/assets/:asset_id')
    .get(assetController.view)
    .patch(assetController.update)
    .put(assetController.update)
    .delete(assetController.delete);
router.route('/login')
    .post(loginController.login);
// Export API routes
module.exports = router;