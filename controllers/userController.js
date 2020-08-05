const db = require("../models");

// Defining methods for the Users Controller
module.exports = {
  findByEmail: function(request, response) {
    db.Users
      .findOne({ email: request.params.email })
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
      .findOneAndUpdate({ _id: request.body._id }, request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  }
};
