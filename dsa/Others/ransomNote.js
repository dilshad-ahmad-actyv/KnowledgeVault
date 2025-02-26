/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ransomNoteObj = {};
  let magazineObj = {};
  let isAvail = false;

  for (let i = 0; i < ransomNote.length; i++) {
    if (ransomNoteObj[ransomNote[i]] === undefined) {
      ransomNoteObj[ransomNote[i]] = 1;
    } else {
      ransomNoteObj[ransomNote[i]]++;
    }
  }

  for (let j = 0; j < magazine.length; j++) {
    if (magazineObj[magazine[j]] === undefined) {
      magazineObj[magazine[j]] = 1;
    } else {
      magazineObj[magazine[j]]++;
    }
  }

  console.log(ransomNoteObj);
  console.log(magazineObj);
  for (let key in ransomNoteObj) {
    if (key in magazineObj) {
      if (ransomNoteObj[key] <= magazineObj[key]) {
        isAvail = true;
      } else {
        isAvail = false;
        break;
      }
    } else {
      isAvail = false;
      break;
    }
  }
  return isAvail;
};

console.log(
  canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj')
);
