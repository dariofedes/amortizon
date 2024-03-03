import HttpClient from '../../src/Common/HttpClient'
import { RestProductRepository } from '../../src/Product/RestProductRepository'

describe('ProductRepositoryRest', () => {
  it('should retrieve the given page', async () => {
    // Given
    const mockedHttpClient = {
      get: jest.fn(async (url) => ({ info: { next: null }, results: [] }))
    }
    const productRepository = new RestProductRepository(mockedHttpClient)
    const page = 1
    const filters = []
    const urlWithPage = 'https://rickandmortyapi.com/api/character/?name=morty&page=1'

    // When
    await productRepository.getAll(page, filters)

    // Then
    expect(mockedHttpClient.get).toHaveBeenCalledWith(urlWithPage)
  })

  it('should retrieve products with the given filters', async () => {
    // Given
    const mockedHttpClient = {
      get: jest.fn(async (url) => ({ info: { next: null }, results: [] }))
    }
    const productRepository = new RestProductRepository(mockedHttpClient)
    const page = 1
    const testFilter = {
      value: 'testFilter',
      getParam: () => 'testFilter=testFilter'
    }

    const filters = [testFilter]
    const urlWithPage = 'https://rickandmortyapi.com/api/character/?name=morty&page=1&testFilter=testFilter'

    // When
    await productRepository.getAll(page, filters)

    // Then
    expect(mockedHttpClient.get).toHaveBeenCalledWith(urlWithPage)
  })
})