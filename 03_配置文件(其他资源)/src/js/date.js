const now = () => {
  return dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
}

const dateFormat = (date, char) => {
  const replacements = {
    YYYY: String(date.getFullYear()),
    YY: String(date.getFullYear()).slice(-2),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    DD: String(date.getDate()).padStart(2, '0'),
    HH: String(date.getHours()).padStart(2, '0'),
    hh: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0')
  }
  let originDate = char
  Object.keys(replacements).forEach(key => {
    originDate = originDate.replace(key, replacements[key])
  })
  return originDate
}

module.exports = {
  dateFormat,
  now
}
