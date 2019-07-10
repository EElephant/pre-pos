'use strict';

function collectSameElements(collectionA, objectB) {
  const collectionC = [];
  collectionA.forEach(item => {
    objectB.value.forEach(element => {
      if(item == element){
        collectionC.push(item)
      }
    })
  })
  return collectionC;
}
