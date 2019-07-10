'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let targetArray = objectB['value'];
  let result;
  targetArray.forEach(element => {
    result = collectionA.map(item => {
      if (element == item.key) {
        item.count --;
      }
      return item;
    });
  });
  return result;
}
