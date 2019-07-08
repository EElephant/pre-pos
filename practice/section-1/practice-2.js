'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionC = [];
  for(var i=0;i<collectionA.length;i++){
      for(var j=0;j<collectionB[0].length;j++){
        if(collectionA[i]==(collectionB[0][j])){
          collectionC.push(collectionA[i])
        }
      }
    }
  return collectionC;
}
