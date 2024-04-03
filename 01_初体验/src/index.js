import { sum, mul } from './js/math.js'

const { now, dateFormat } = require('./js/date')

console.log('sum', sum(1, 2))
console.log('mul', mul(2, 3))

console.log('now', now())
console.log('formattedNow', dateFormat(new Date(), 'YYYY-MM-DD'))
