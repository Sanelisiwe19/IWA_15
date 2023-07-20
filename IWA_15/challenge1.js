const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  };
  
  // Only edit below
  
  const result = [];
  
  const extractBiggest = () => {
    const lastIndex = data.lists.map(([, arr]) => arr.length - 1);
    const [firstIndex, secondIndex, thirdIndex] = lastIndex;
  
    if (data.lists[0][1][firstIndex] >= data.lists[1][1][secondIndex] && data.lists[0][1][firstIndex] >= data.lists[2][1][thirdIndex]) {
      result.push(data.lists[0][1].pop());
    } else if (data.lists[1][1][secondIndex] >= data.lists[0][1][firstIndex] && data.lists[1][1][secondIndex] >= data.lists[2][1][thirdIndex]) {
      result.push(data.lists[1][1].pop());
    } else {
      result.push(data.lists[2][1].pop());
    }
  };
  
  // Only edit above
  
  // Running the extractBiggest function 15 times as instructed
  for (let i = 0; i < 15; i++) {
    extractBiggest();
  }
  
  console.log(result);
  