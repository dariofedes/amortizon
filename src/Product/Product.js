export default class Product {
  constructor(productDTO) {
    this.id = productDTO.id
    this.name = productDTO.name
    this.image = productDTO.image
    this.status = productDTO.status
    this.location = productDTO.location.name
    this.price =  this.id * 100
    this.hasStock = this.status === 'Alive'
    this.hasKnownLocation = this.location !== 'unknown'
  }
}