import { statsCalculator } from "./statsCalculator"

const dataMock = [6,9,15,-2,92,11]

describe('statsCalculator', () => { 
  it('foo', () => {
    const result = statsCalculator(dataMock)
    expect(result).toBe(-2)
  })
 })