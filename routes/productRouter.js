const express = require("express")
const router = express.Router()

const {
    createProduct,
    getAllProduct,
    getAllProducts,
} = require("../controllers/productController")

const { uploadProductImage } = require("../controllers/uploadController")

const { uploadProductImage } = require("../controllers/uploadController")

router.route("/").get(getAllProducts).post(createProduct)
router.route("/uploads").post(uploadProductImage)

module.exports = router;

