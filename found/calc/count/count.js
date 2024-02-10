// counts the number of sheep present in the array (true means present).

function countSheeps(sheepArray) {
  let count = 0;

  for (let i = 0; i < sheepArray.length; i++) {
    if (sheepArray[i] === true) {
      count++;
    }
  }
  return count;
}
// [undefined,null,false,true,true,false,null,undefined]
