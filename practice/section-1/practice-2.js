'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionC = [];
  collectionA.forEach(item => {
    collectionB[0].forEach(element => {
      if(item == element){
        collectionC.push(item)
      }
    })
  })
  return collectionC;
}
