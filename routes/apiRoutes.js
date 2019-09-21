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
      productName: req.body.productName,
      prodDesc: req.body.prodDesc,
      category: req.body.category,
      subcat: req.body.subcat,
      prodImg: req.body.prodImg,
      manufacturer: req.body.manufacturer,
      price: req.body.price,
      caseCount: req.body.caseCount,
      caseDimensions: req.body.caseDimensions,
      caseWeight: req.body.caseWeight,
      onHand: req.body.onHand,
      certs: req.body.certs,
      ndbno: req.body.ndbno
    }).then(function(result) {
      res.json(result);
    });
  });
};
