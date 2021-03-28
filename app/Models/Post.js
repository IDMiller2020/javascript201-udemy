//NOTE and object that holds all the information for the data needed per object
export default class Post {
  constructor(body) {
    this.body = body;
    this.date = Date.now();
  }
}