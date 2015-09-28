let urlUtils = {

	getUrlParameter: function(name, queryString = window.location.search) {
		let match = RegExp('[?&]' + name + '=([^&]*)').exec(queryString);
		return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	},

	queryStringToJson: function(url = window.location.search) {
	    if (url === '')
	        return '';
	    let pairs = url.slice(1).split('&'),
	    	result = {};
	    for (var idx in pairs) {
	        var pair = pairs[idx].split('=');
	        if (!!pair[0]) {
	        	let val = decodeURIComponent(pair[1] || '');
	        	if (val.indexOf(',') !== -1) {
	        		val = val.split(',');
	        	}
	            result[pair[0].toLowerCase()] = val;
	        }
	    }
	    return result;
	}

}

export default urlUtils;