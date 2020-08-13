const db = require("../models");

// Defining methods for the Bases Controller
module.exports = {
  findByUserId: function(request, response) {
    db.Bases
      .find({ creatorID: request.params.id })
      .then(dbModel => response.json(dbModel))
      .catch(error => response.status(422).json(error));
  },
  findByName: function(request, response) {
    db.Bases
      .find({ baseName: request.params.name })
      .then(dbModel => {
        response.json(dbModel)
      })
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
      .findOneAndUpdate({ _id: request.body._id }, request.body)
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

// mongoose.connection.db.listCollections({name: 'mycollectionname'})
//     .next(function(err, collinfo) {
//         if (collinfo) {
//             // The collection exists
//         }
//     });