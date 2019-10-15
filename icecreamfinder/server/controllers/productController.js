const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Products
        .find(req.query)
        .sort({inStock: 1})
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    findProduct: function(req, res) {
        db.Products
        .find(req.params.product)
        .sort({inStock: 1})
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Products
        .create(req.body)
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Products
        .findOneAndUpdate({_product: req.params.product}, req.body)
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Products
        .findById({_product: req.params.product})
        .then(dbProduct => dbProduct.remove())
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    }
};