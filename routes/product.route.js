import express from "express";

import productController from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", productController.create);
router.get("/", productController.all);
router.get("/:id", productController.find);
router.delete("/:id", productController.remove);
router.put("/:id", productController.update);

export default router;
