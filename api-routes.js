// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var contactController = require('./controller/contactController');
var loginController = require('./controller/loginController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
router.route('/contacts/reset/all')
    .delete(contactController.deleteAll);
router.route('/login')
    .post(loginController.login);
// Export API routes
module.exports = router;