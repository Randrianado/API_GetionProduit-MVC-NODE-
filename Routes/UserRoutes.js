import express from "express";
import UserController from "../Controllers/UserController.js";
import CommentController from "../Controllers/CommController.js";
import ArtricleController from "../Controllers/ArticleController.js";

const router=express.Router();

router.post('/user',UserController.createUser);
// router.post('/existe',UserController.Existe);
router.get('/users',UserController.getAll);
router.post('/login',UserController.Connect);
router.delete('/user/:id',UserController.deleteUser);
router.post('/comment/create',CommentController.Create);
router.patch('/comment/update/:id',CommentController.Update);
router.get('/comment/read/:id',CommentController.Read);
router.delete('/comment/delete/:id',CommentController.Delete);
router.post('/article/create',ArtricleController.Create);
router.post('/article/find',ArtricleController.ReadByName);

export default router;