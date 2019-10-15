import axios from "axios";

export default {
    getAllProducts: function() {
        return axios.get("/api/products");
    },
    getProduct: function(id) {
        return axios.get("/api/products/" + id);
    },
    deleteProduct: function(id) {
        return axios.get("/api/products/" + id);
    },
    newProduct: function(productData) {
        return axios.post("/api/products", productData);
    },
    updateProduct: function(id) {
        return axios.put("/api/products/" + id);
    }
}