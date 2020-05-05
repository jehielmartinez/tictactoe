function brain (arr) {
  const patterns = {
    0: [[1, 2], [4, 8], [3, 6]],
    1: [[0], [2], [4, 7]],
    2: [[1, 0], [4, 6], [5, 8]],
    3: [[0], [4, 5], [6]],
    4: [[0], [1], [2], [3], [5], [6], [7], [8]],
    5: [[2], [4, 3], [8]],
    6: [[3, 0], [4, 2], [7, 8]],
    7: [[6], [4, 1], [8]],
    8: [[5, 2], [4, 0], [7, 6]]
  }

  let bestResult = 1
  let bestIndex = 0
  const sameResultsIndex = []
  let sameResultValue = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
      let result = 0

      patterns[i].forEach(test => {
        const testStr = test.map(index => arr[index]).join()
        if (testStr === 'x' || testStr === 'o') {
          result = result + 1
        } else if (testStr === 'x,x' || testStr === 'o,o') {
          result = result + 2
        } else if (testStr === 'x,o' || testStr === 'o,x') {
          result = result + 0
        } else if (testStr === 'x,a' || testStr === 'a,x') {
          result = result + 1
        } else if (testStr === 'a,x' || testStr === 'a,o') {
          result = result + 1
        }
      })
      if (result > bestResult) {
        bestResult = result
        bestIndex = i
      } else if (result === bestResult) {
        sameResultsIndex.push(i)
        sameResultValue = result
      }
    }
  }

  if (sameResultValue >= bestResult) {
    const randomIndex = sameResultsIndex[Math.floor(Math.random() * sameResultsIndex.length)]
    arr[randomIndex] = 'o'
  } else {
    arr[bestIndex] = 'o'
  }

  return arr
};

export default brain
