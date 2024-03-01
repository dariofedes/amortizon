export default class Filter {
  constructor(value) {
    this.value = value
  }

  getParam() {
    throw new Error('method not implemented')
  }
}