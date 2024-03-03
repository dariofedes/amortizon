import dayjs from 'dayjs'
import Product from './Product'

export default class DeliveryTimeService {
  public getDeliveryTime(product: Product) {
    if(this.isInstantDeliveryAvailable(product)) return this.getInstantDeliveryDate()

    return this.getLongDeliveryDate()
  }

  private isInstantDeliveryAvailable(product: Product) {
    return product.hasStock && product.hasKnownLocation
  }

  private getInstantDeliveryDate() {
    const today = dayjs()
    const tomorrow = today.add(1, 'day')

    return `tomorrow ${tomorrow.format('DD MMM')}`
  }

  private getLongDeliveryDate() {
    const today = dayjs()
    const nextWeek = today.add(1, 'week')

    return nextWeek.format('DD MMM')
  }
}