export const statsCalculator = (data) => {
  let minNumber = data[0]
  for (let index = 1; index < data.length; index++) {

    if (data[index] < minNumber) {
      minNumber = data[index];
    }
  }
  return minNumber
}