import Post from "../Models/Post.js";
import Store from "../store.js";

//NOTE gets information/requests from the controller applies all business logic and based on that returns certain data from the store.

class PostService{
  constructor(){
    console.log("creating Service")
  }
  createPost(){
    console.log("Creating post from the service")
    let newPost = new Post("new Post")
    let posts = [...Store.State.posts, newPost];
    Store.commit('posts', posts);
  }
}

const service = new PostService()
export default service;