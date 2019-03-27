// Import asset model
Asset = require('../model/assetModel');
// Handle index actions
exports.index = function (req, res) {
    Asset.get(function (err, assets) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Assets retrieved successfully",
            data: assets
        });
    });
};
// Handle create asset actions
exports.new = function (req, res) {
    var asset = new Asset();
    asset.name = req.body.name;
    asset.os = req.body.os;
    asset.status = req.body.status;
    asset.loaner = req.body.loaner;
    asset.brand = req.body.brand;
    asset.ram = req.body.ram;
    asset.harddisk = req.body.harddisk;
    asset.programs = req.body.programs;
    asset.serial = req.body.serial;
    asset.processor = req.body.processor;
    asset.mac_wifi = req.body.mac_wifi;
    asset.mac_lan = req.body.mac_lan;
    asset.warranty = req.body.warranty;
    asset.service_tag = req.body.service_tag;
    asset.email = req.body.email;
    asset.department = req.body.department;
// save the asset and check for errors
    asset.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New asset created!',
            data: asset
        });
    });
};
// Handle view asset info
exports.view = function (req, res) {
    Asset.findById(req.params.asset_id, function (err, asset) {
        if (err)
            res.send(err);
        res.json({
            message: 'Asset details loading..',
            data: asset
        });
    });
};
// Handle update asset info
exports.update = function (req, res) {
    Asset.findById(req.params.asset_id, function (err, asset) {
        if (err)
            res.send(err);
        asset.name = req.body.name;
        asset.os = req.body.os;
        asset.status = req.body.status;
        asset.loaner = req.body.loaner;
        asset.brand = req.body.brand;
        asset.ram = req.body.ram;
        asset.harddisk = req.body.harddisk;
        asset.programs = req.body.programs;
        asset.serial = req.body.serial;
        asset.processor = req.body.processor;
        asset.mac_wifi = req.body.mac_wifi;
        asset.mac_lan = req.body.mac_lan;
        asset.warranty = req.body.warranty;
        asset.service_tag = req.body.service_tag;
        asset.email = req.body.email;
        asset.department = req.body.department;
// save the asset and check for errors
        asset.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Asset Info updated',
                data: asset
            });
        });
    });
};
// Handle delete asset
exports.delete = function (req, res) {
    Asset.remove({
        _id: req.params.asset_id
    }, function (err, asset) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Asset deleted'
        });
    });
};
