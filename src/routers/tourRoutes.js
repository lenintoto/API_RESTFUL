import Router from "express";
import { createTourController, deleteTourController, getAllToursController, getTourByIdController, updateTourController } from "../controllers/tour_controller.js";
import { verifyToken } from "../middlewares/auth.js";
const router = Router()
//JWT

//: Rutas Publicas
//          Punto 1,Punto 2
router.get('/tours',getAllToursController)

//! Rutas Privadas
router.post('/tours',createTourController)

//: Rutas Publicas
router.get('/tours/:id',getTourByIdController)

//! Rutas Privadas
router.put('/tours/:id',verifyToken,updateTourController)

//! Rutas Privadas
router.delete('/tours/:id',deleteTourController)

export default router