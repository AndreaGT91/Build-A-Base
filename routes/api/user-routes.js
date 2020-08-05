const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.create)
  .put(userController.update);

// Matches with "/api/user/:email"
router.route("/:email")
  .get(userController.findByEmail);
  
module.exports = router;
