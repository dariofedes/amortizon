import React from 'react'
import { render } from '@testing-library/react-native'
import ProductCard from '../../src/Product/ProductCard'
import Product from '../../src/Product/Product'
import productDTOFixture from '../fixtures/ProductDTOFixture'

describe('ProductCard', () => { 
  it('should render the product info', () => {
    // Given
    const product = new Product(productDTOFixture)

    // When
    const { getByText } = render(<ProductCard product={product} />)

    const productName = getByText('A Product Name')
    const productPrice = getByText('100:$')
    const deliveryDate = getByText('Not available')

    // Then
    expect(productName).toBeDefined()
    expect(productPrice).toBeDefined()
    expect(deliveryDate).toBeDefined()
  })  
})