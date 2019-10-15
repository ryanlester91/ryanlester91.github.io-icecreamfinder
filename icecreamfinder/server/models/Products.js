const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
 product: { type: String, required: true },
 quantity: { type: Number, required: true},
//hasAllergen boolean?
 hasAllergen: {type: Boolean, require: true},
 price: {type: Number, require: true},
 inStock: {type: Boolean, require: true}
});
const Products = mongoose.model("Products", productsSchema);
module.exports = Products;