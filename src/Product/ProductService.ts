import Filter from './Filter'
import Product from "./Product"
import ProductRepository from './ProductRepository'
import getProductRepositoryRest from "./ProductRepositoryRest"

export class ProductService {
  productRepository: ProductRepository

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async getProducts(page: number, filters: Filter[]) {
    return this.productRepository.getAll(page, filters)
  }
}

const productRepositoryRest = getProductRepositoryRest()

export default () => new ProductService(productRepositoryRest)