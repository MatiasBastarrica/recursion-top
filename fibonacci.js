console.log("hello");
function fibs(num) {
  let arr = [0, 1];
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return arr;
  }
  for (let i = 2; i < num; i++) {
    let result = arr[i - 1] + arr[i - 2];
    arr.push(result);
  }
  return arr;
}

console.log(fibs(8));

function fibsRec(num) {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  }
  let prevSequence = fibsRec(num - 1);
  let newFibNum =
    prevSequence[prevSequence.length - 1] +
    prevSequence[prevSequence.length - 2];
  let sequence = [...prevSequence, newFibNum];
  return sequence;
}

console.log(fibsRec(8));
