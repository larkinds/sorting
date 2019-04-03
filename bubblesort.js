  const swap = arr => {
    let holderArr = [];
    let bigNum = 0;
    let littleNum = 0;
    if (arr[0] > arr[1]) {
      bigNum = arr[0];
      littleNum = arr[1];
    } else {
      bigNum = arr[1];
      littleNum = arr[0];
    }

    holderArr.push(littleNum);
    holderArr.push(bigNum);

    return holderArr;
  };

const bubbleSort = arr => {};
