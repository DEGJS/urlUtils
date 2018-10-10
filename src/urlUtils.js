function getUrlParameter(name, queryString = window.location.search) {
	const match = RegExp('[?&]' + name + '=([^&]*)').exec(queryString);
	return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

function normalizeValue(item) {
	return item.trim().toLowerCase();
}

function queryStringToJson(queryString = window.location.search, normalize = true) {
	return queryStringToObj(queryString, normalize)
}

function queryStringToObj(queryString = window.location.search, normalize = true) {
    if (queryString === '') {
		return {};
	}
	let pairs = '';

	if (queryString.indexOf('?') > -1) {
		pairs = queryString.slice(1).split('&');
	} else {
		pairs = queryString.split('&');
	}

	return pairs.reduce((accum, queryParam) => {
		const [key, value] = queryParam.split('=');

		if (key) {
			let val = decodeURIComponent(value || '');
        	if (val.indexOf(',') !== -1) {
        		val = val.split(',');
        	}
        	if (normalize === true) {
        		val = normalizeValue(val);
			}
			accum[key] = val;
		}
		return accum;
	}, {})

};

function objToQueryString(obj) {
	const keys = Object.keys(obj) || [];
	const retVal = keys.map(key => `${key}=${encodeURIComponent(obj[key])}`).join('&');

	return `?${retVal}`;
}

export {
	getUrlParameter,
	queryStringToJson,
	queryStringToObj,
	objToQueryString
};
