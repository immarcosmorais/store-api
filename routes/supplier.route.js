import express from "express";

import supplierController from "../controllers/supplier.controller.js";

const router = express.Router();

router.post("/", supplierController.create);
router.get("/", supplierController.all);
router.get("/:id", supplierController.find);
router.delete("/:id", supplierController.remove);
router.put("/:id", supplierController.update);

export default router;
