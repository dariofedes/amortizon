import Filter from "./Filter"

export default class StockFilter extends Filter {
  constructor(value: boolean) {
    super(value)
  }

  getParam(): string {
    return this.value ? 'status=alive' : ''
  }
}