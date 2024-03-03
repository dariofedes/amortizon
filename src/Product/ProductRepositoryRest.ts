import axios from 'axios'
import ProductRepository from "./ProductRepository";
import Filter from './Filter';
import ProductRepositoryResponse from './ProductRepositoryResponse';
import Product from './Product';

export class ProductRepositoryRest extends ProductRepository {
  baseUrl = 'https://rickandmortyapi.com/api/character/?name=morty'
  httpClient: any

  constructor(httpClient) {
    super()

    this.httpClient = httpClient
  } 

  public async getAll(page: number, filters: Filter[]): Promise<ProductRepositoryResponse> {
    const filtersParams = this.getFiltersParams(filters)

    const { data: { results, info:{ next } } } = await this.httpClient.get(`${this.baseUrl}&page=${page}${filtersParams}`)
    
    const products = results.map((result: any) => new Product(result))
    const nextPage = this.getPageFromUrl(next)

    return {products, nextPage }
  }

  private getFiltersParams(filters: Filter[]): string {
    let filtersParams = ""

    filters.forEach(filter => {
      filtersParams = filtersParams + '&' + filter.getParam()
    });

    return filtersParams
  }

  private getPageFromUrl(url: string): number | null {
    if(url) {
      const params = (new URL(url)).searchParams

      return Number(params.get('page'))
    } else return null
  }
}

export default () => new ProductRepositoryRest(axios)