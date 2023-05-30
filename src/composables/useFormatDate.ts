export function useFormatDate(param: String, locale: String = 'id-ID') {
  // Expected parameter format: datetime YYYY-MM-DD hh:mm:ss

  // const arrParam = param.replace('T', ' ')
  //   .replace('Z', '').split(' ')
  const arrParam = param.split(' ')
  const [paramDate, paramTime] = arrParam
  const dateString = paramDate.split('-')
  const timeString = paramTime.split(':')
  const [hour, minute, second] = timeString
  const [year, month, day] = dateString

  let monthString = ''
  let monthStringLong = ''

  switch (month.toString()) {
    case '01' || '1':
      monthString = locale === 'id-ID' ? 'Jan' : 'Jan'
      monthStringLong = locale === 'id-ID' ? 'Januari' : 'January'
      break
    case '02' || '2':
      monthString = locale === 'id-ID' ? 'Feb' : 'Feb'
      monthStringLong = locale === 'id-ID' ? 'Februari' : 'February'
      break
    case '03' || '3':
      monthString = locale === 'id-ID' ? 'Mar' : 'Mar'
      monthStringLong = locale === 'id-ID' ? 'Maret' : 'March'
      break
    case '04' || '4':
      monthString = locale === 'id-ID' ? 'Apr' : 'Apr'
      monthStringLong = locale === 'id-ID' ? 'April' : 'April'
      break
    case '05' || '5':
      monthString = locale === 'id-ID' ? 'Mei' : 'May'
      monthStringLong = locale === 'id-ID' ? 'Mei' : 'May'
      break
    case '06' || '6':
      monthString = locale === 'id-ID' ? 'Jun' : 'Jun'
      monthStringLong = locale === 'id-ID' ? 'Juni' : 'June'
      break
    case '07' || '7':
      monthString = locale === 'id-ID' ? 'Jul' : 'Jul'
      monthStringLong = locale === 'id-ID' ? 'Juli' : 'July'
      break
    case '08' || '8':
      monthString = locale === 'id-ID' ? 'Agu' : 'Aug'
      monthStringLong = locale === 'id-ID' ? 'Agustus' : 'August'
      break
    case '09' || '9':
      monthString = locale === 'id-ID' ? 'Sep' : 'Sep'
      monthStringLong = locale === 'id-ID' ? 'September' : 'September'
      break
    case '10':
      monthString = locale === 'id-ID' ? 'Okt' : 'Oct'
      monthStringLong = locale === 'id-ID' ? 'Oktober' : 'October'
      break
    case '11':
      monthString = locale === 'id-ID' ? 'Nov' : 'Nov'
      monthStringLong = locale === 'id-ID' ? 'November' : 'November'
      break
    case '12':
      monthString = locale === 'id-ID' ? 'Des' : 'Dec'
      monthStringLong = locale === 'id-ID' ? 'Desember' : 'December'
      break
    default:
      break
  }

  const hourMod = Number(hour) - 12
  let amper = 'AM'

  if (hourMod >= 0)
    amper = 'PM'

  if (locale === 'id-ID') {
    const date = `${day} ${monthString} ${year}`
    const dateLong = `${day} ${monthStringLong} ${year}`
    const time = `${hour}.${minute} WIB`
    const full = `${day} ${monthString} ${year}, ${hour}.${minute} WIB`
    const fullLong = `${day} ${monthStringLong} ${year}, ${hour}:${minute}:${second} WIB`
    const plain = `${year}${month}${day}`

    return { date, dateLong, time, full, fullLong, plain }
  }
  else {
    const date = `${day} ${monthString} ${year}`
    const dateLong = `${day} ${monthStringLong} ${year}`
    const time = `${hourMod > 0 ? hourMod : hour}.${minute} ${amper}`
    const full = `${day} ${monthString} ${year}, ${hourMod > 0 ? hourMod : hour}.${minute} ${amper}`
    const fullLong = `${day} ${monthStringLong} ${year}, ${hourMod > 0 ? hourMod : hour}:${minute}:${second} ${amper}`
    const plain = `${year}${month}${day}`

    return { date, dateLong, time, full, fullLong, plain }
  }
}

export function useCurrentDate() {
  const today = new Date()

  const DD = today.getDate()
  const ss = today.getSeconds()
  const mm = today.getMinutes()
  const hh = today.getHours()

  const MM = today.getMonth() + 1
  const YYYY = today.getFullYear()

  const full = `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`
  const plain = `${YYYY}-${MM}-${DD}`
  const versioning = `${YYYY}${MM}${DD}${hh}${mm}`

  return { full, plain, versioning }
}

export function useOnlyDate(date: string) {
  const today = new Date(date)

  const DD = today.getDate()
  const ss = today.getSeconds()
  const mm = today.getMinutes()
  const hh = today.getHours()

  const MM = today.getMonth() + 1
  const YYYY = today.getFullYear()

  const full = `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`
  const plain = `${YYYY}-${MM}-${DD}`
  const versioning = `${YYYY}${MM}${DD}${hh}${mm}`

  return { full, plain, versioning }
}

export function useFormatBulan(bulan: string) {
  switch (bulan) {
    case '1':
      return 'Januari'
    case '2':
      return 'Februari'
    case '3':
      return 'Maret'
    case '4':
      return 'April'
    case '5':
      return 'Mei'
    case '6':
      return 'Juni'
    case '7':
      return 'Juli'
    case '8':
      return 'Agustus'
    case '9':
      return 'September'
    case '10':
      return 'Oktober'
    case '11':
      return 'November'
    case '12':
      return 'Desember'
    default:
      // code block
  }
}

export function useFormatDateUpload(date: string) {
  const current = new Date(date)

  const DD = current.getUTCDate()
  const ss = current.getUTCSeconds()
  const mm = current.getUTCMinutes()
  const hhMod = current.getUTCHours() < 7 ? current.getUTCHours() + 7 : current.getUTCHours()
  const hh = hhMod >= 24 ? hhMod - 24 : hhMod

  const MM = current.getUTCMonth() + 1
  const YYYY = current.getUTCFullYear()

  return `${YYYY}-${MM < 10 ? `0${MM}` : MM}-${DD < 10 ? `0${DD}` : DD} ${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`
}
