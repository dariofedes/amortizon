import Product from "../Product/Product";

export default class CartProduct extends Product {
  constructor(product) {
    super(product)

    this.quantity = 1
  }

  add() {
    this.quantity = this.quantity + 1
  }

  remove() {
    this.quantity = this.quantity - 1
  }
}