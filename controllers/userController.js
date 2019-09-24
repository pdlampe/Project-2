var db = require("../models");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

module.exports = function(app) {
  app.get("/api/users/:user", function(req, res) {
    db.User.findOne({
      where: {
        userName: req.params.user
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};