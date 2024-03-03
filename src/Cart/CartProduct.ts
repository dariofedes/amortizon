import Product from "../Product/Product";

export default class CartProduct extends Product {
  quantity: number

  constructor(product: Product) {
    super(product)

    this.quantity = 1
  }

  add(): void {
    this.quantity = this.quantity + 1
  }

  remove(): void {
    this.quantity = this.quantity - 1
  }
}