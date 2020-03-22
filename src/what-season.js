module.exports = function getSeason(data) {
	
	let type = {}.toString.call(data).slice(8, -1);
	
  	if (data) {
  		if (type == 'Date') {
  			let season = data.getMonth();
  				switch (season) {
  					case 0:
		        	case 1:
		        	case 11:
		        		return 'winter';
		          		break;
		        	case 2:
		        	case 3:
		        	case 4:
		        		return 'spring';
		          		break;
		        	case 5:
		        	case 6:
		        	case 7:
		        		return 'summer';
		          		break;
		        	case 8:
		        	case 9:
		        	case 10:
		          		return 'fall';
		          		break;
		        	default:
		          		return 'sorry, nothing matched';
		          		break;
		  		}
		  	}
  		else {
  			throw new UserException('Fake date!');
  		}
  	}
  	else return 'Unable to determine the time of year!';
}
