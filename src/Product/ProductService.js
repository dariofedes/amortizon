import Product from "./Product"
import getProductRepositoryRest from "./ProductRepositoryRest"

export class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository
  }

  async getProducts(page, filters) {
    const { results, nextPage } = await this.productRepository.getAll(page, filters)

    const products = results.map(result => new Product(result))

    return { products, nextPage }
  }
}

const productRepositoryRest = getProductRepositoryRest()

export default () => new ProductService(productRepositoryRest)