'use strict';

function collectSameElements(collectionA, objectB) {
  const collectionC = [];
  collectionA.forEach(item => {
    objectB.value.forEach(element => {
      if(item.key == element){
        collectionC.push(item.key)
      }
    })
  })
  return collectionC;
}
