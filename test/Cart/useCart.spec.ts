import { renderHook, act } from '@testing-library/react-native'
import { useCart } from '../../src/Cart/useCart'
import Product from '../../src/Product/Product'
import productDTOFixture from '../fixtures/ProductDTOFixture'

describe('useCart', () => {
  it('should start with cart empty', () => {
    // When
    const { result } = renderHook(() => useCart())

    // Then
    expect(result.current.count).toBe(0)
  })

  it('should add products to the cart', () => {
    // Given
    const product = new Product(productDTOFixture)
    const { result } = renderHook(() => useCart())
     
    // When
    act(() => {
      result.current.addProductToCart(product)
    })

    // Then
    expect(result.current.count).toBe(1)
  })

  it('should remove products from the cart', () => {
    // Given
    const product = new Product(productDTOFixture)
    const { result } = renderHook(() => useCart())
    act(() => {
      result.current.addProductToCart(product)
    })
     
    // When
    act(() => {
      result.current.removeProductFromCart(product)
    })

    // Then
    expect(result.current.count).toBe(0)
  })

  it('should compute the cart total price', () => {
    // Given
    const product = new Product(productDTOFixture)
    const { result } = renderHook(() => useCart())
    act(() => {
      result.current.addProductToCart(product)
    })

    // Then
    expect(result.current.total).toBe(100)
  })
})