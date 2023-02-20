import express from "express";
import clientController from "../controllers/client.controller.js";

const router = express.Router();

router.post("/", clientController.create);
router.get("/", clientController.all);
router.get("/:id", clientController.find);
router.delete("/:id", clientController.remove);
router.put("/:id", clientController.update);

export default router;
