/**
 * 중앙값을 받아서 해당 값을 중앙으로 하는 array를 원하는 길이만큼 만드는 함수 (짝수 길이는 현재 처리 X)
 * @param {number} centerValue 배열의 중앙이 되는 값
 * @param {number} arrayLength 배열의 길이 (짝수X)
 */
function createCenteredArray(centerValue, arrayLength) {
  const array = [];
  const halfArrayLength = Math.floor(arrayLength / 2);

  const startValue = centerValue - halfArrayLength;
  for (let i = 0; i <= arrayLength - 1; i++) {
    array.push(startValue + i);
  }

  return array;
}

export default createCenteredArray;
