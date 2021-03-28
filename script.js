class Collectible {
  constructor ({image, title, description, rarity, tags}) {
    this.image = image || '//placehold.it/200x200'
    this.title = title
    this.description = description
    this.rarity = rarity || 'common'
    this.tags = tags || []
  }
  addTag(tag) {
    this.tags.push(tag)
  }
  removeTag(tag) {
    this.tags.splice(this.tags.indexOf(tag), 1)
  }
  get Template(){
    return `
    <div class="col-6">
    <div class="card">
      <img class="card-img-top" src="${this.image}" alt="Card Image">
      <div class="card-body">
        <i class="far fa-trash-alt delete"></i>
        <h4 class="card-title">${this.title}</h4>
        <p class="card-text">${this.description}</p>
        <p class="card-text">${this.rarity}</p>
      </div>
    </div>
  </div>
    `
  }
}