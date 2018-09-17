var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    image: String,
    employee_id: {
        type: String,
        required: true
    },
    position: { 
        type: String,
        default: ''
    },
    department: { 
        type: String,
        default: ''
    },
    status: { 
        type: String,
        default: ''
    },
    phone: { 
        type: String,
        default: ''
    },
    email: { 
        type: String,
        default: ''
    },
    last_edited: { 
        type: String,
        default: ''
    },
    assets: { 
        type: String,
        default: ''
    },
    wifi_password: { 
        type: String,
        default: ''
    },
    printer_password: { 
        type: String,
        default: ''
    },
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