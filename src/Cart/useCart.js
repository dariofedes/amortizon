import { useState } from 'react'
import { singletonHook } from 'react-singleton-hook';
import CartProduct from './CartProduct';

export function useCart() {
  const [products, setProducts] = useState([])

  function addProductToCart(product) {
    const cartProduct = new CartProduct(product)

    setProducts(prevProducts => [...prevProducts, cartProduct])
  }

  function removeProductFromCart(product) {
    setProducts(prevProducts => prevProducts.filter(prevProduct => prevProduct.id !== product.id))
  }

  function isProductInCart(productId) {
    return products.some(product => product.id === productId)
  }

  function addOne(product) {
    const newProducts = products.map(prevProduct => {
      if(prevProduct.id === product.id) prevProduct.add()

      return prevProduct
    })

    setProducts(newProducts)
  }

  function removeOne(product) {
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
  addProductToCart: () => null,
  removeProductFromCart: () => null,
  isProductInCart: () => null,
  addOne: () => null,
  removeOne: () => null,
  total: 0,
}

export default singletonHook(initialState, useCart)