import { useState, useEffect, useRef } from 'react'
import getProductService from './ProductService'
import useFilters from './useFilters'
import Product from './Product'

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { getFilters, stockOnly } = useFilters()
  let nextPage = useRef<number | null>(1)

  const productService = getProductService()

  useEffect(() => {
    (async () => {
      setIsLoading(true)

      nextPage.current = 1
      
      const products = await getProductsPaginated()
      
      setProducts(products)
      setIsLoading(false)
    })();
  }, [stockOnly])

  async function getNextPage() {
    if(nextPage.current) {
      const results = await getProductsPaginated()

      setProducts(prevResults => [...prevResults, ...results])
    }
  }

  async function getProductsPaginated() {
    const filters = getFilters()

    const { nextPage: _nextPage, products } = await productService.getProducts(nextPage.current!, filters)

    nextPage.current = _nextPage

    return products
  }

  return {
    isLoading,
    products,
    getNextPage,
  }
}