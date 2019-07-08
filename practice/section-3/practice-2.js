'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let targetArray = objectB['value'];
  let result;
  targetArray.forEach(element => {
    result = collectionA.map(item => {
      if(element == item.key && item.count >= 3){
        item.count -= parseInt( item.count / 3)
      }
      return item;
    })
  });
  return result;
}
