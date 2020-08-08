const db = require("../models");
const jwt = require("jsonwebtoken");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Defining methods for the Users Controller
module.exports = {
  findByEmail: function (request, response) {
    db.Users
      .findOne({ email: request.params.email })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  create: function (request, response) {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // If user already exists, throw message. Else, create.
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
  login: function (request, response) {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    };

    const email = req.body.email;
    const password = req.body.password;

    db.Users
      .findOne({ email })
      .then(user => {
        // Check is user exists
        if (!user) {
          return res.status(404).json({ emailnotfound: "Email not found" });
        };

        // Check password
        db.Users.comparePassword(password)
          .then(isMatch => {
            if (isMatch) {
              // User matched, create JWT Payload
              const payload = {
                id: user.id,
                name: user.firstName + " " + user.lastName
              };
              // Sign token
              jwt.sign(
                payload,
                "secret",
                {
                  expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            };
          })
      })
      .catch(error => response.status(422).json(error));
  },
  update: function (request, response) {
    db.Users
      .findOneAndUpdate({ _id: request.body._id }, request.body)
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  }
};
