import Filter from './Filter'
import ProductRepository from './ProductRepository'
import getRestProductRepository from "./RestProductRepository"

export class ProductService {
  productRepository: ProductRepository

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async getProducts(page: number, filters: Filter[]) {
    return this.productRepository.getAll(page, filters)
  }
}

const restProductRepository = getRestProductRepository()

export default () => new ProductService(restProductRepository)