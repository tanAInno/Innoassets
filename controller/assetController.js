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
    asset.name = req.body.name ? req.body.name : asset.name;
    asset.os = req.body.os;
    asset.status = req.body.status;
    asset.loaner = req.body.loaner;
    asset.brand = req.body.brand;
    asset.ram = req.body.ram;
    asset.harddisk = req.body.harddisk;
    asset.programs = req.body.programs;
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
        asset.name = req.body.name ? req.body.name : asset.name;
        asset.os = req.body.os;
        asset.status = req.body.status;
        asset.loaner = req.body.loaner;
        asset.brand = req.body.brand;
        asset.ram = req.body.ram;
        asset.harddisk = req.body.harddisk;
        asset.programs = req.body.programs;
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