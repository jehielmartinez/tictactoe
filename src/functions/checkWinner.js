function checkWinner (arr) {
  if (areEqual(arr[0], arr[1], arr[2]) ||
        areEqual(arr[3], arr[4], arr[5]) ||
        areEqual(arr[6], arr[7], arr[8]) ||

        areEqual(arr[0], arr[4], arr[8]) ||
        areEqual(arr[2], arr[4], arr[6]) ||

        areEqual(arr[0], arr[3], arr[6]) ||
        areEqual(arr[1], arr[4], arr[7]) ||
        areEqual(arr[2], arr[5], arr[8])
  ) {
    return true
  } else {
    return false
  }
}

function areEqual () {
  const len = arguments.length
  for (let i = 1; i < len; i++) {
    if (arguments[i] === 'a' || arguments[i] !== arguments[i - 1]) { return false }
  }
  return true
}

export default checkWinner
