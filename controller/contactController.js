// Import contact model
Contact = require('../model/contactModel');
// Handle index actions
exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.employee_id = req.body.employee_id;
    contact.image = req.body.image;
    contact.position = req.body.position;
    contact.department = req.body.department;
    contact.status = req.body.status;
    contact.phone = req.body.phone;
    contact.email = req.body.email;
    contact.last_edited = req.body.last_edited;
    contact.wifi_password = req.body.wifi_password;
    contact.assets = req.body.assets;
    contact.printer_password = req.body.printer_password;
// save the contact and check for errors
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
contact.name = req.body.name ? req.body.name : contact.name;
        contact.employee_id = req.body.employee_id;
        contact.image = req.body.image;
        contact.position = req.body.position;
        contact.department = req.body.department;
        contact.status = req.body.status;
        contact.phone = req.body.phone;
        contact.email = req.body.email;
        contact.last_edited = req.body.last_edited;
        contact.wifi_password = req.body.wifi_password;
        contact.assets = req.body.assets;
        contact.printer_password = req.body.printer_password;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};

exports.deleteAll = function (req, res) {
    Contact.remove({})
    return res.end('success')
}