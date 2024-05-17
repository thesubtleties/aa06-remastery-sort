import { expect } from 'chai';
import { merge, mergeSort } from "../mergesort.mjs";


describe('merge', () => {
    it('should merge two short arrays', () => {
        const result = merge([3, 8], [2, 5]);
        const expected = [2, 3, 5, 8];
        expect(result).to.eql(expected);
    });
});

describe('mergeSort', () => { 
    it('should sort an array of numbers correctly', () => {
        const result = mergeSort([3, 8, 12, 5, 22, 14, 9, 7, 1, 6]);
        const expected = [1, 3, 5, 6, 7, 8, 9, 12, 14, 22];
        expect(result).to.eql(expected);
    });
});
