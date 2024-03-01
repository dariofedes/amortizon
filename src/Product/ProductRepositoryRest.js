import axios from 'axios'
import ProductRepository from "./ProductRepository";

export class ProductRepositoryRest extends ProductRepository {
  baseUrl = 'https://rickandmortyapi.com/api/character/?name=morty'

  constructor(httpClient) {
    super()

    this.httpClient = httpClient
  } 

  async getAll(page, filters) {
    const filtersParams = this.getFiltersParams(filters)

    const response = await this.httpClient.get(`${this.baseUrl}&page=${page}${filtersParams}`)

    const nextPageUrl = response.data.info.next

    const nextPage = this.getPageFromUrl(nextPageUrl)

    return {results: response.data.results, nextPage }
  }

  getFiltersParams(filters) {
    let filtersParams = ""

    filters.forEach(filter => {
      filtersParams = filtersParams + '&' + filter.getParam()
    });

    return filtersParams
  }

  getPageFromUrl(url) {
    if(url) {
      const params = (new URL(url)).searchParams

      return params.get('page')
    } else return null
  }
}

export default () => new ProductRepositoryRest(axios)