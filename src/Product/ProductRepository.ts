import Filter from './Filter';
import ProductRepositoryResponse from './ProductRepositoryResponse';

export default abstract class ProductRepository {
  async getAll(page: number, filters: Filter[]): Promise<ProductRepositoryResponse> {
    throw new Error('method not implemented')
  }
}