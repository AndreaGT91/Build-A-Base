const router = require("express").Router();
// const customController = require("../../controllers/customController");

// Matches with "/api/custom/:baseName"
router.route("/:baseName")
  .get(customController.findAll)
  .post(customController.create)
  .put(customController.update);

// Matches with "/api/custom/:baseName/:id"
router.route("/:baseName/:id")
  .delete(customController.remove);

module.exports = router;
