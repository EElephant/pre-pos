'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = new Map();
  let result = [];
  let targetArray = objectB['value'];
  collectionA.forEach(element => {
    let count = (collectionC.get(element) === undefined) ? 1 : collectionC.get(element) + 1;
    collectionC.set(element,count); 
  })
  collectionC.forEach((value,key)=>{
    let item = {
      key:key,
      count:value
    }
    result.push(item)
  })
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
