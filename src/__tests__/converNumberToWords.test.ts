import { convertNumbersToWords } from '../convertNumbersToWords'

describe('convert to words', () => {
  it('converts as expected', () => {
    expect(convertNumbersToWords(1)).toEqual('one')
    expect(convertNumbersToWords(10)).toEqual('ten')
    expect(convertNumbersToWords(11)).toEqual('eleven')
    expect(convertNumbersToWords(23)).toEqual('twenty three')
    expect(convertNumbersToWords(22)).toEqual('twenty two')
    expect(convertNumbersToWords(111)).toEqual('one hundred and eleven')
    expect(convertNumbersToWords(120)).toEqual('one hundred and twenty')
    expect(convertNumbersToWords(121)).toEqual('one hundred and twenty one')
    expect(convertNumbersToWords(300)).toEqual('three hundred')
  })
})
