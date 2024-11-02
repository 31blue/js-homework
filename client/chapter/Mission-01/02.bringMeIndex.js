/* ---------------------------------------------- */
/* Bring Me Index

문제:배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.
설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.
/* ---------------------------------------------- */

function getNumberAtArray(arr, index) {
  if (-1 < index <= arr.length - 1) {
    return arr[index];
  } else {
    console.log('Error!');
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 0)); // 10
console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
