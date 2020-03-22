module.exports = function transform(arr) {

  if (Array.isArray(arr)) { 
  	for (let k = 0; k < arr.length; k++) {
  		switch (arr[k]) {
        case '--discard-next':
          if (arr[k+2] === '--double-prev') {
            arr.splice(k, 1);
            arr.splice(k+2, 1);
          }
          else arr.splice(k, 2)
          break;
        case '--double-prev':
          if (k = 0) arr.splice(0, 1);
          else arr.splice(k, 1, arr[k-1]);
          break;
        case '--double-next':
          if (arr[k+2] === '--discard-prev') {
            arr.splice(k, 1);
            arr.splice(k+2, 1);
          }
          else arr.splice(k, 1, arr[k+1]);
          break;
        case '--discard-prev':
          if (k = 0) arr.splice(k, 1);
          else arr.splice(k-1, 2);
          break;  
        default:
  				break;
  		}
  	}
  	return arr;
  } 
  else throw 'Invalid parameter';
};
