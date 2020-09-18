const meetingRequireRooms = list => {
  let result = 1;
  for (let i = 0; i < list.length - 1; i++) {
    let pre = list[i];
    for (let j = i + 1; j < list.length; j++) {
      let item = list[j];
      if ((pre[0] <= item[0] && pre[1] >= item[1]) || (pre[0] >= item[0] && pre[0] < item[1]) || 
      (pre[1] <= item[1] && pre[1] > item[0])) {
        result = result + 1;
      }
    }
  }
  return result;
}