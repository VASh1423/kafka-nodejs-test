import { Router } from "express";
import {
  postTest,

} from "../controllers/test.controllers.js";

const router = Router();

router.post("/", postTest);

export default router;