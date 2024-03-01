import dayjs from 'dayjs'

export default function DeliveryTimeService() {
  function getDeliveryTime(product) {
    if(isInstantDeliveryAvailable(product)) return getInstantDeliveryDate()

    return getLongDeliveryDate()
  }

  function getInstantDeliveryDate() {
    const today = dayjs()
    const tomorrow = today.add(1, 'day')

    return `tomorrow ${tomorrow.format('DD MMM')}`
  }

  function getLongDeliveryDate() {
    const today = dayjs()
    const nextWeek = today.add(1, 'week')

    return nextWeek.format('DD MMM')
  }

  function isInstantDeliveryAvailable(product) {
    return product.hasStock && product.hasKnownLocation
  }

  return {
    getDeliveryTime
  }
}