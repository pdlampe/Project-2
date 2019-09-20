/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  // Get all items
  app.get("/api/items", function(req, res) {
    db.Item.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/items", function(req, res) {
    console.log(req.body);
    db.Item.create({
      plu: req.body.plu,
      product_name: req.body.product_name,
      prod_desc: req.body.prod_desc,
      category: req.body.category,
      subcat: req.body.subcat,
      prod_img: req.body.prod_img,
      manufacturer: req.body.manufacturer,
      price: req.body.price,
      case_count: req.body.case_count,
      case_dimensions: req.body.case_dimensions,
      case_weight: req.body.case_weight,
      on_hand: req.body.on_hand,
      certs: req.body.certs,
      ndbno: req.body.ndbno
    }).then(function(result) {
      res.json(result);
    });
  });
};
