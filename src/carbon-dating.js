const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = (Math.floor(Math.log(2)*1000)/1000) / HALF_LIFE_PERIOD; 

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && parseFloat(sampleActivity) < 15 && parseFloat(sampleActivity) > 0) {
  	let period = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
  	return Math.ceil(period);
  } 
  else return false;
};
