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
}