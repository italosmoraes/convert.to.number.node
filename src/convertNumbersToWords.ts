const dictionary = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  20: 'twenty',
  30: 'thirty'
}

const resolveTwoDigitNumbers = (no: number) => {
  const noAsTextList = no.toString().split('')

  if (no < 20) {
    return dictionary[no]
  }

  if (no >= 20) {
    const found = dictionary[no]

    if (found) {
      return found
    }
  }

  let phrase = ''

  phrase += dictionary[Number.parseInt(noAsTextList[0] + '0')]

  phrase += ' ' + dictionary[noAsTextList[1]]

  return phrase
}

export const convertNumbersToWords = (no: number) => {
  console.log('--- resolving:', no)

  let phrase = ''

  if (no < 100) {
    return resolveTwoDigitNumbers(no)
  } else {
    const noAsTextList = no.toString().split('')

    const mod = no % 100

    if (mod === 0) {
      return dictionary[noAsTextList[0]] + ' hundred'
    }

    // user first digit to put together the hundred
    phrase += dictionary[noAsTextList[0]] + ' hundred'

    // resolve the 2nd and 3rd digits of the hundred
    phrase +=
      ' and ' +
      resolveTwoDigitNumbers(
        Number.parseInt(noAsTextList[1].toString() + noAsTextList[2].toString())
      )
  }

  console.log('---- phrase: ', phrase)
  return phrase
}
