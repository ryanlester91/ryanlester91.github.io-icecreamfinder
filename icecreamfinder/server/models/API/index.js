const router = require("express").Router();
const truckRoutes = require("./Truck");
const productRoutes = require("./Products");
const userRoutes = require("./User");

router.use("/products", productRoutes);
router.use("/trucks", truckRoutes);
router.use("/users", userRoutes);

module.exports = router;