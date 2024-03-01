import { useState, useEffect, useRef } from 'react'
import getProductService from './ProductService'
import useFilters from './useFilters'

export default function useProducts() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { getFilters, stockOnly } = useFilters()
  let nextPage = useRef(1)

  const productService = getProductService()

  useEffect(() => {
    (async () => {
      setIsLoading(true)

      nextPage.current = 1
      
      const results = await getProductsPaginated()
      
      setResults(results)
      setIsLoading(false)
    })();
  }, [stockOnly])

  async function getNextPage() {
    if(nextPage.current) {
      const results = await getProductsPaginated()

      setResults(prevResults => [...prevResults, ...results])
    }
  }

  async function getProductsPaginated() {
    const filters = getFilters()

    const { nextPage: _nextPage, products } = await productService.getProducts(nextPage.current, filters)

    nextPage.current = _nextPage

    return products
  }

  return {
    isLoading,
    results,
    getNextPage,
  }
}