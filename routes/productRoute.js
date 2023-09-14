const express = require("express")
const productController = require("./../controllers/productContoller")
const router = express.Router();

router
    .route("/")
    .get(productController.getAllProduct)
    .post(productController.createNewProduct);

router
    .route("/:id")
    .get(productController.findProductById)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)

module.exports = router;