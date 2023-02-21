import express from "express";
import saleController from "../controllers/sale.controller.js";

const router = express.Router();

router.post("/", saleController.create);
router.get("/", saleController.all);
router.get("/:id", saleController.find);
router.delete("/:id", saleController.remove);
router.put("/:id", saleController.update);

export default router;
