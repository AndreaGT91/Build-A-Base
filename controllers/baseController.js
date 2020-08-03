const db = require("../models");

// Defining methods for the Bases Controller
module.exports = {
  findAll: function(request, response) {
    db.Bases
      .find(request.query)
      .sort({ baseName: 1 })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  findById: function(request, response) {
    db.Bases
      .findById({ _id: request.params.id })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  create: function(request, response) {
    db.Bases
      .create(request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  update: function(request, response) {
    db.Bases
      .findOneAndUpdate({ _id: request.params.id }, request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  remove: function(request, response) {
    db.Bases
      .findById({ _id: request.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  }
};
