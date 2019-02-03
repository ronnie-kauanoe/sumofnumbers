function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

function sumRecursion(data, index) {
  if (index === 0) {
    return data[0];
  }
  return data[index] + sumRecursion(data, index - 1);
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function (sum, num) { return sum + num; });
}

const list = [1, 2, 3, 4, 5];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list, list.length - 1));
console.log(sumTheSimpleWay(list));
