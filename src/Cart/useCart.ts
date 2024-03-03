import { useState } from 'react'
import { singletonHook } from 'react-singleton-hook';
import CartProduct from './CartProduct';
import Product from '../Product/Product';

export function useCart() {
  const [products, setProducts] = useState<CartProduct[]>([])

  function addProductToCart(product: Product): void {
    const cartProduct = new CartProduct(product)

    setProducts(prevProducts => [...prevProducts, cartProduct])
  }

  function removeProductFromCart(product: Product): void {
    setProducts(prevProducts => prevProducts.filter(prevProduct => prevProduct.id !== product.id))
  }

  function isProductInCart(productId: string): boolean {
    return products.some(product => product.id === productId)
  }

  function addOne(product: Product): void {
    const newProducts = products.map(prevProduct => {
      if(prevProduct.id === product.id) prevProduct.add()

      return prevProduct
    })

    setProducts(newProducts)
  }

  function removeOne(product: Product): void {
    const newProducts = products.map(prevProduct => {
      if(prevProduct.id === product.id) prevProduct.remove()

      return prevProduct
    })

    setProducts(newProducts)
  }

  return {
    products,
    count: products.reduce((acc, cur) => acc + cur.quantity, 0),
    addProductToCart,
    removeProductFromCart,
    total: products.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0),
    isProductInCart,
    addOne,
    removeOne,
  }
}

const initialState = {
  products: [],
  count: 0,
  addProductToCart: (product: Product) => null,
  removeProductFromCart: (product: Product) => null,
  isProductInCart: (productId: string) => undefined,
  addOne: (product: Product) => null,
  removeOne: (product: Product) => null,
  total: 0,
}

export default singletonHook(initialState, useCart)