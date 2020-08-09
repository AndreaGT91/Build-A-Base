const router = require("express").Router();
const baseController = require("../../controllers/baseController");

// Matches with "/api/base"
router.route("/")
  .post(baseController.create)
  .put(baseController.update);

// Matches with "/api/base/:id"
router.route("/:id")
  .get(baseController.findByUserId)
  .delete(baseController.remove);

module.exports = router;
