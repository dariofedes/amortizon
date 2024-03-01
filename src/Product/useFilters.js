import { useState } from 'react'
import { singletonHook } from 'react-singleton-hook';
import StockFilter from './StockFilter';

export function useFilters() {
  const [stockOnly, setStockOnly] = useState(false)

  function getFilters() {
    const filters = []

    filters.push(new StockFilter(stockOnly))

    return filters
  }

  return {
    getFilters,
    stockOnly,
    setStockOnly,
  }
}

const initialState = {
  getFilters: () => [],
  stockOnly: false,
  setStockOnly: () => null,
}

export default singletonHook(initialState, useFilters)