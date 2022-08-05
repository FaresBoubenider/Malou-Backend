import express from "express";
import auth from "../middlewares/auth.js";
import { getPosts, getProductCategorie } from "../controllers/api.js";
var router = express.Router();

//the routes of the application

router.use("/getPosts", auth, getPosts);
router.use("/getProductCategorie", auth, getProductCategorie )

export default router;
