import PostController from "./Controllers/PostController.js";

//NOTE This file spins up an app and loads all the controllers
class App {
  postController = new PostController();
}

window["app"] = new App();
