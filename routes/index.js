import express from "express";
import { getPosts, getProductCategorie } from "../controllers/api.js";
var router = express.Router();

//the routes of the application

router.get("/getPosts", getPosts);
router.get("/getProductCategorie", getProductCategorie )

export default router;
