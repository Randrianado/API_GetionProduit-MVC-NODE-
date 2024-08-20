import express from "express";
import UserController from "../Controllers/UserController.js";

const router=express.Router();

router.post('/user',UserController.createUser);
// router.post('/existe',UserController.Existe);
router.get('/users',UserController.getAll);
router.post('/login',UserController.Connect);
router.delete('/user/:id',UserController.deleteUser);

export default router;