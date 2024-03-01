export default class Product {
  constructor(productDTO) {
    this.id = productDTO.id
    this.name = productDTO.name
    this.image = productDTO.image
    this.status = productDTO.status
    this.location = productDTO.location.name
  }

  get price() {
    return this.id * 100
  }

  get hasStock() {
    return this.status === 'Alive'
  }

  get hasKnownLocation() {
    return this.location !== 'unknown'
  }
}