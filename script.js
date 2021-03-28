class Collectible {
  constructor (image, title, description, rarity, tags) {
    this.image = image
    this.title = title
    this.description = description
    this.rarity = rarity
    this.tags = tags
  }
  addTag(tag) {
    this.tags.push(tag)
  }
  removeTag(tag) {
    this.tags.splice(this.tags.indexOf(tag), 1)
  }
}