const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.create)
  .put(userController.update);

// Matches with "/api/user/login"
router.route("/login")
  .post(userController.login);

// Matches with "/api/user/forgotpassword"
router.route("/forgotpassword")
  .put(userController.forgotPassword);

// Matches with "/api/user/:email"
router.route("/:email")
  .get(userController.findByEmail);

module.exports = router;
