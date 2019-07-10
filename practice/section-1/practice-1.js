'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionC = [];
  collectionA.forEach(item => {
    collectionB.forEach(element => {
      if(item == element){
        collectionC.push(item)
      }
    })
  })
  return collectionC;
}
