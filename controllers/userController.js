const db = require("../models");

// Defining methods for the Users Controller
module.exports = {
  findAll: function(request, response) {
    db.Users
      .find(request.query)
      .sort({ fullName: 1 })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  findById: function(request, response) {
    db.Users
      .findById({ _id: request.params.id })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  create: function(request, response) {
    db.Users
      .create(request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  update: function(request, response) {
    db.Users
      .findOneAndUpdate({ _id: request.params.id }, request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  remove: function(request, response) {
    db.Users
      .findById({ _id: request.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  }
};
