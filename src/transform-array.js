module.exports = function transform(arr) {
  
  if (Array.isArray(arr)) { 
    let workArr = arr.slice();
   	for (let k = 0; k < workArr.length; k++) {
  		switch (workArr[k]) {
        case '--discard-next':
          if (workArr[k+2] === '--double-prev' || workArr[k+2] === '--discard-prev' ) { //check if other control str overlap
            workArr.splice(k, 3);
          }
          else if (k === (workArr.length - 1)) workArr.splice(k, 1); //remove control str in case there is no applied elem 
          else workArr.splice(k, 2); //normal case
          k--;
          break;
        case '--double-prev':
          if (k === 0) workArr.splice(k, 1); //remove control str in case there is no applied elem 
          else workArr.splice(k, 1, workArr[k-1]); //normal case
          --k;
          break;
        case '--double-next':
          if (k === (workArr.length - 1)) workArr.splice(k, 1); //remove control str in case there is no applied elem 
          else workArr.splice(k, 1, workArr[k+1]); //normal case
          --k;
          break;
        case '--discard-prev':
          if (k === 0) workArr.splice(k, 1);  //remove control str in case there is no applied elem 
          else workArr.splice(k-1, 2); //normal case
          --k;
          break;  
        default:
  				break;
  		}
  	}
  	return workArr;
  } 
  else throw Error;
};
