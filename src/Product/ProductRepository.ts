import Filter from './Filter';
import ProductRepositoryResponse from './ProductRepositoryResponse';

export default interface ProductRepository {
  getAll(page: number, filters: Filter[]): Promise<ProductRepositoryResponse>
}