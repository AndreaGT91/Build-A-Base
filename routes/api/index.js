const router = require("express").Router();
const userRoutes = require("./user-routes");
const baseRoutes = require("./base-routes");
const xlsxRoutes = require("./excel-routes");

// User routes
router.use("/user", userRoutes);

// Base routes
router.use("/base", baseRoutes);

// XLSX routes
router.use("/xlsx", xlsxRoutes);

module.exports = router;
