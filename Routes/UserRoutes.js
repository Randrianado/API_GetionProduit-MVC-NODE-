import express from "express";
import UserController from "../Controllers/UserController.js";
import CommentController from "../Controllers/CommController.js";
import ArtricleController from "../Controllers/ArticleController.js";

const router=express.Router();

//Routes des Utilisateurs
router.post('/user',UserController.createUser);
router.get('/users',UserController.getAll);
router.post('/login',UserController.Connect);
router.delete('/user/:id',UserController.deleteUser);

//Routes des commentaires
router.post('/comment/create',CommentController.Create);
router.patch('/comment/update/:id',CommentController.Update);
router.get('/comment/read/:id',CommentController.Read);
router.delete('/comment/delete/:id',CommentController.Delete);

//Routes des Articles
router.post('/article/create',ArtricleController.Create);
router.post('/article/find',ArtricleController.ReadByName);
router.get('/article/getAll',ArtricleController.ReadAll);
router.patch('/article/update/:id',ArtricleController.Update);

export default router;