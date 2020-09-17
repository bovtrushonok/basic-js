module.exports = function transform(arr) {

  if (Array.isArray(arr)) { 
  	for (let k = 0; k < arr.length; k++) {
  		switch (arr[k]) {
        case '--discard-next':
          if (arr[k+2] === '--double-prev') {
            arr.splice(k+2, 1);
            arr.splice(k, 1);
          }
          else {
            arr.splice(k, 2);
          }
          k--;
          break;
        case '--double-prev':
          if (k === 0) arr.splice(0, 1); 
          else arr.splice(k, 1, arr[k-1]);
          --k;
          break;
        case '--double-next':
          if (k === (arr.length - 1)) arr.splice(k, 1);
          else arr.splice(k, 1, arr[k+1]); 
          --k;
          break;
        case '--discard-prev':
          if (k === 0) arr.splice(k, 1); 
          else arr.splice(k-1, 2); 
          --k;
          break;  
        default:
  				break;
  		}
  	}
  	return arr;
  } 
  else throw 'Invalid parameter';
};
