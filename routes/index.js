import express from "express";
import auth from "../middlewares/auth.js";
import { getPosts, getProductCategorie } from "../controllers/api.js";
var router = express.Router();

//the routes of the application

router.get("/getPosts", auth, getPosts);
router.get("/getProductCategorie", auth, getProductCategorie )

export default router;
