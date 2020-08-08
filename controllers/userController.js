const db = require("../models");

// Load input validation
const validateRegisterInput = require("../../validation/register");

// Defining methods for the Users Controller
module.exports = {
  findByEmail: function (request, response) {
    db.Users
      .findOne({ email: request.params.email })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  create: function (request, response) {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    db.Users
      .findOne({ email: request.body.email })
      .then(user => {
        if (user) {
          return res.status(400).json({ email: "Email already exists" });
        } else {
          db.Users
            .create(request.body)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
        };
      });
  },
  update: function (request, response) {
    db.Users
      .findOneAndUpdate({ _id: request.body._id }, request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  }
};
