var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    employee_id: {
        type: String,
        required: true
    },
    position: String,
    department: String,
    status: String,
    phone: String,
    Email: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}