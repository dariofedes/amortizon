import Product from './Product'

type ProductRepositoryResponse = {
  nextPage: number | null,
  products: Product[]
}

export default ProductRepositoryResponse