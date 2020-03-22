module.exports = function createDreamTeam(members) {
	let teamName = [];
	if (Array.isArray(members)) {
  		for (let k of members) {
  			if (typeof k == "string") {
  				teamName.push(k.trim().slice(0, 1).toUpperCase());
  			}
  			else continue;
  		}
  	return teamName.sort().join('');
  }
  else return false;
};