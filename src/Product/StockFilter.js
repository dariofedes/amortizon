import Filter from "./Filter"

export default class StockFilter extends Filter {
  constructor(value) {
    super(value)
  }

  getParam() {
    return this.value ? 'status=alive' : ''
  }
}