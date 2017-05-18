import express from 'express';
import mongoose from 'mongoose';
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

mongoose.connect('mongodb://localhost:27017/reddit', () =>{
    console.log('connected to mongodb')
});
const  routes = express();
// basic routes
routes.get("/", basicController.get);

// user routes
routes.post("/signup", userController.post);

// Post routes
routes.post("/post", postController.post);
routes.get("/post", postController.getAll);

// Comment routes
routes.post("/comment", commentController.post);
export default routes;
