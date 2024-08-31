import express from "express";
import * as userController from "../controllers/userController.js";
import * as pagescontroller from "../controllers/pages.js";

const router = express.Router();
router.post("/user/register", userController.register);
router.post("/user/login", userController.login);
router.get("/user/page", pagescontroller.page);

export default router;