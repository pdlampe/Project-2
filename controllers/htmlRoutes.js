var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Item.findAll({}).then(function(result) {
      res.render("index", {
        msg: "Welcome!",
        items: result
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/admin/products", function(req, res) {
    db.Item.findAll({}).then(function(result) {
      res.render("products", {
        items: result
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
