const { createProdct, getAllProducts, getProductById, updateProduct, deleteProduct } = require("../controllers/products.controllers")



module.exports = (app) =>{
    app.post("/products",createProdct)
    app.get("/products", getAllProducts)
    app.get("/products/:id",getProductById)
    app.put("/products/:id",updateProduct)
    app.delete("/products/:id",deleteProduct)
}