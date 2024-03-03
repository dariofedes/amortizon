export default abstract class Filter {
  value: any

  constructor(value: any) {
    this.value = value
  }

  abstract getParam(): string
}