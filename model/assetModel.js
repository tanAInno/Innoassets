var mongoose = require('mongoose');
// Setup schema
var assetSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    os: { 
        type: String,
        default: ''
    },
    status: { 
        type: String,
        default: ''
    },
    loaner: { 
        type: String,
        default: ''
    },
    brand: { 
        type: String,
        default: ''
    },
    ram: { 
        type: String,
        default: ''
    },
    harddisk: { 
        type: Array,
        default: []
    },
    serial: {
        type: String,
        default: ''
    },
    processor: {
        type: String,
        default: ''
    },
    mac_wifi: {
        type: String,
        default: ''
    },
    mac_lan: {
        type: String,
        default: ''
    },
    warranty: {
        type: String,
        default: ''
    },
    service_tag: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    department: {
        type: String,
        default: ''
    },
    programs: { 
        type: Array,
        default: []
    }
});
// Export asset model
var asset = module.exports = mongoose.model('asset', assetSchema);
module.exports.get = function (callback, limit) {
    Asset.find(callback).limit(limit);
}