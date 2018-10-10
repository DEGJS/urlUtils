# urlUtils
[![Build Status](https://travis-ci.com/DEGJS/urlUtils.svg?branch=master)](https://travis-ci.com/DEGJS/urlUtils)

Utility functions for working with the browser URL. These functions are primarily to be used with partial URLs. For work with full URLs, consider using [the URL interface](https://developer.mozilla.org/en-US/docs/Web/API/URL).

## Install
UrlUtils is an ES6 module. Consequently, you may need an ES6 transpiler ([Babel](https://babeljs.io/) is a nice one) as part of your Javascript workflow.

If you are already using NPM for your project, you can install urlUtils with the following command:
`$ npm install @degjs/url-utils`

## Usage
Importing individual domUtils methods:
```
import {queryStringToObj} from '@degjs/url-utils';

const queryParamObj = queryStringToObj(window.location.search);
```

Importing all domUtils methods:
```
import * as urlUtils from '@degjs/url-utils';

const queryParamObj = urlUtils.queryStringToObj(window.location.search);
```

## Methods

### getUrlParameter(name, queryString)
The getUrlParameter method returns the value of a specified query parameter when given the query param name. If no param is found by the given name, `null` is returned.

#### name
Type: `String`
The name of the query param to get the value of.

#### queryString
Type: `String`
Default: `window.location.search`
The query string to search.

### queryStringToObj(queryString, normalize)
_Previously called queryStringToJson_ The queryStringToObj method takes in a query string and returns an object where the property names are the query param names and the property values are the query param values.

#### queryString
Type: `String`
Default: `window.location.search`
The query string to convert.

#### normalize
Type: `Boolean`
Default: `true`
If set to true, the value of the query parameter will have whitespace trimmed and the text be converted to all lowercase.

### objToQueryString(obj)
The objToQueryString method does the opposite of the queryStringToObj method. It takes in an object and converts the key, value pairs into a queryString.

#### obj
Type: `Object`
The object to convert. It should consist of key, value pairs where the value is a primitive type.
