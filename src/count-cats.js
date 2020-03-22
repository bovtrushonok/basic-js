module.exports = function countCats(array) {
  let catsNumber = 0;
  for (let i = 0; i < array.length; i++) {
  	for (let k = 0; k < array[i].length; k++){
  		if (array[i][k] == '^^' || array[i][k] == "^^") catsNumber++;
   	}
  }
  return catsNumber ? catsNumber : 0;
};
