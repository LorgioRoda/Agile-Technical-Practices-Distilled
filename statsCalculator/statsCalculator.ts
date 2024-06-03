export const statsCalculatorMinNumber = (data) => {
  let minNumber = data[0]
  for (let index = 1; index < data.length; index++) {

    if (data[index] < minNumber) {
      minNumber = data[index];
    }
  }
  return minNumber
}


export const statsCalculatorMaxNumber = (data) => {
  let number = data[0]
  for (let index = 1; index < data.length; index++) {
    if (data[index] > number) {
      number = data[index];
    }
  }
  return number
}

export const statsCalculatorTotalSequence = (data) => {
  if(Array.isArray(data)) return data.length
  return 0
}

export const statsCalculatorAverageValue = (data) => {
  const totalOfElements = data.length
  const total = data.reduce((acc, current) =>  acc + current ,0)
  return total / totalOfElements
}