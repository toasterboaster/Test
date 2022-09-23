function removeSmallest(numbers) {
  let small = Math.min(...numbers)
  let answer = [];
  let repeat = [];
  numbers.forEach((x, i) => { if (x == small){
                         repeat.push(i)
    answer.push(x)
                       }
                            else {answer.push(x)}
                            })
  if (repeat.length > 1){
    answer.splice(repeat[0],1)
  } 
  else {
    answer.splice(answer.indexOf(small),1)
  }
  return answer
}

console.log(removeSmallest([2, 2, 1, 2]))