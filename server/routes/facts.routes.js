import { Router } from "express";
import { getFacts,createFact,getFactByCategory } from "../controller/facts.controller.js";
const router=Router();

router.get("/facts",getFacts);
router.post("/facts/create",createFact);
router.get("/facts/category/:cat",getFactByCategory);


export default router;