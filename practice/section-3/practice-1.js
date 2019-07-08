'use strict';

function createUpdatedCollection(collectionA, objectB) {
  // let targetArray = objectB['value'];
  // for(var i=0;i<targetArray.length;i++){
  //   for(var j=0;j<collectionA.length;j++){
  //     if(collectionA[j].key == targetArray[i]){
  //       collectionA[j].count --;
  //     }
  //   }
  // }
  // return collectionA;

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
