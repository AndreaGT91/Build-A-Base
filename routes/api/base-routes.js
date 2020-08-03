const router = require("express").Router();
const baseController = require("../../controllers/baseController");

// Matches with "/api/base"
router.route("/")
  .get(baseController.findAll)
  .post(baseController.create);

// Matches with "/api/base/:id"
router
  .route("/:id")
  .get(baseController.findById)
  .put(baseController.update)
  .delete(baseController.remove);

module.exports = router;
