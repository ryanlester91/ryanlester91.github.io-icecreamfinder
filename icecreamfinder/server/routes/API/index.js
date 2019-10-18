const router = require("express").Router();
const truckRoutes = require("../../models/Truck");
const productRoutes = require("../../models/Products");
//const userRoutes = require("../../models/User");

router.use("/products", productRoutes);
router.use("/trucks", truckRoutes);
//router.use("/users", userRoutes);

module.exports = router;
