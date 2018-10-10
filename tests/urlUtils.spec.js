import {
    queryStringToObj,
    objToQueryString,
    getUrlParameter
} from '../src/urlUtils';

describe('urlUtils', () => {

    describe('getUrlParameter', () => {
        it('should return the value of the query param (single)', () => {
            const returnedVal = getUrlParameter('param', '?param=testParam');
            expect(returnedVal).toEqual('testParam');
        });

        it('should return the value of the query param (multi)', () => {
            const returnedVal = getUrlParameter('param1', '?param1=testParam1&param2=testParam2');
            expect(returnedVal).toEqual('testParam1');
        });

        it('should return null if no param', () => {
            const returnedVal = getUrlParameter('param', '?param2=testParam');
            expect(returnedVal).toEqual(null);
        });
    });

    describe('queryStringToObj', () => {
        it('should return if queryString is empty', () => {
            const retVal = queryStringToObj('');
            expect(retVal).toEqual({});
        });

        it('should return object version of queryString with one query param', () => {
            const retVal = queryStringToObj('test1=1');
            const expectedVal = {
                test1: "1"
            };
            expect(retVal).toEqual(expectedVal);
        });

        it('should return object version of queryString with multiple params', () => {
            const retVal = queryStringToObj('test1=1&test2=2');
            const expectedVal = {
                test1: "1",
                test2: "2"
            };
            expect(retVal).toEqual(expectedVal);
        });

        it('should normalize query param', () => {
            const retVal = queryStringToObj('test1=ABC%20abc%20123');
            const expectedVal = {
                test1: "abc abc 123"
            };
            expect(retVal).toEqual(expectedVal);
        });

        it('should not normalize, if specified', () => {
            const retVal = queryStringToObj('test1=ABC%20abc%20123', false);
            const expectedVal = {
                test1: "ABC abc 123"
            };
            expect(retVal).toEqual(expectedVal);
        })
    });

    describe('objToQueryString', () => {
        it('should return query string for obj', () => {
            const retVal = objToQueryString({
                param1: 'test1'
            });
            const expectedVal = '?param1=test1';
            expect(retVal).toEqual(expectedVal);
        });

        it('should return query string for obj with multiple properties', () => {
            const retVal = objToQueryString({
                param1: 'test1',
                param2: 'test2'
            });
            const expectedVal = '?param1=test1&param2=test2';
            expect(retVal).toEqual(expectedVal);
        });

        it('should return query string with encoded chars', () => {
            const retVal = objToQueryString({
                param1: 'a test with spaces'
            });
            const expectedVal = '?param1=a%20test%20with%20spaces';
            expect(retVal).toEqual(expectedVal);
        });
    });
});