import { Router } from "express";
import {
getMateria, 
} from "../controllers/materia.controller.js";

const router = Router();

router.get("/materia", getMateria);


export default router;
