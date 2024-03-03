export default abstract class Filter {
  value: any

  constructor(value: any) {
    this.value = value
  }

  getParam(): string {
    throw new Error('method not implemented')
  }
}