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

export default {
    getAllUsers: function() {
        return axios.get("/api/users");
    },
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    deleteUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    newUser: function(userData) {
        return axios.post("/api/users", userData);
    },
    updateUser: function(id) {
        return axios.put("/api/users/" + id);
    }
}