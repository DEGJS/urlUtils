import objectUtils from "DEGJS/objectUtils";

let urlUtils = {

	getUrlParameter: function(name, queryString = window.location.search) {
		let match = RegExp('[?&]' + name + '=([^&]*)').exec(queryString);
		return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	},

	queryStringToJson: function(queryString = window.location.search, normalize = true) {
	    if (queryString === '')
	        return '';
	    let pairs = queryString.slice(1).split('&'),
	    	result = {};
	    for (var idx in pairs) {
	        var pair = pairs[idx].split('=');
	        if (!!pair[0]) {
	        	let val = decodeURIComponent(pair[1] || '');
	        	if (val.indexOf(',') !== -1) {
	        		val = val.split(',');
	        	}
	        	if (normalize === true) {
	        		val = objectUtils.normalizeValue(val);
	        	}
				result[pair[0]] = val;
	        }
	    }
	    return result;
	}

}

export default urlUtils;
