import {queryStringToObj, getUrlParameter} from '../src/urlUtils';

describe('urlUtils', () => {

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
});