export default class Product {
  id: string
  name: string
  image: string
  status: string
  location: string
  price: number
  hasStock: boolean
  hasKnownLocation: boolean

  constructor(productDTO) {
    this.id = productDTO.id
    this.name = productDTO.name
    this.image = productDTO.image
    this.status = productDTO.status
    this.location = productDTO.location.name
    this.price =  Number(this.id) * 100
    this.hasStock = this.status === 'Alive'
    this.hasKnownLocation = this.location !== 'unknown'
  }
}