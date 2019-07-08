'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let elementMap = new Map();
  let result = [];
  let targetArray = objectB['value']
  collectionA.forEach(item => {
    let count = 0;
    let target = /[0-9]/;
    if (target.test(item)) {
      // 分割字符串
      let spiltItem = item.split('-');
      count = (elementMap.get(spiltItem[0]) === undefined) ? parseInt(spiltItem[1]) : elementMap.get(item) + parseInt(spiltItem[1]);
      elementMap.set(spiltItem[0], count);
    } else {
      count = (elementMap.get(item) === undefined) ? 1 : elementMap.get(item) + 1;
      elementMap.set(item, count);
    }
  });
  elementMap.forEach((value, key) => {
    let item = {
      key: key,
      count: value
    };
    result.push(item);
  });
  targetArray.forEach(element => {
    result = result.map(item => {
      if(element == item.key && item.count >= 3){
        item.count -= parseInt(item.count / 3)
      }
      return item
    })
  })
  return result
}
