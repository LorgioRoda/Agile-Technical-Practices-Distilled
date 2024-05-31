import { statsCalculatorAverageValue, statsCalculatorMaxNumber, statsCalculatorMinNumber, statsCalculatorTotalSequence } from "./statsCalculator"

const dataMock = [6,9,15,-2,92,11]

describe('statsCalculator', () => {
  it('should return min number', () => {
    const result = statsCalculatorMinNumber(dataMock)
    expect(result).toBe(-2)
  })

  it('should return max number', () => {
    const result = statsCalculatorMaxNumber(dataMock)
    expect(result).toBe(92)
  })

  describe('statsCalculatorTotalSequence', () => {
    it('should return total of sequence', () => {
      const result = statsCalculatorTotalSequence(dataMock)
      expect(result).toBe(6)
    })

    it('should return 0 when dont has a list of elements', () => {
      const elementMock = {}
      const result = statsCalculatorTotalSequence(elementMock)
      expect(result).toBe(0)
    })
  })

  describe('statsCalculatorAverageValue', () => {
    it('should return Averange Value', () => {
      const result = statsCalculatorAverageValue(dataMock)
      expect(result).toBe(21.833333333333332)
    })
  })
})