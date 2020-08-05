const db = require("../models");

// Defining methods for the Bases Controller
module.exports = {
  findAll: function(request, response) {
    db.Custom
    .find(request.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(request, response) {
    db.Custom
      .create(request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  update: function(request, response) {
    db.Custom
      .findOneAndUpdate({ _id: request.body._id }, request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  remove: function(request, response) {
    db.Custom
      .findById({ _id: request.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  }
};
