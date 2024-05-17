import { expect } from 'chai';
import { quickSort, partition } from '../quicksort.mjs';

describe('partition', () => {
    it('should return an index value for the pivot item', ()=> {
        const result = partition([3, 8, 12, 5, 22, 14, 9, 7, 1, 6]);
        const expected = 3;
    });
});

describe('quickSort', () => {
    it('should sort an array of numbers correctly', () => {
        const result = quickSort([3, 8, 12, 5, 22, 14, 9, 7, 1, 6]);
        const expected = [1, 3, 5, 6, 7, 8, 9, 12, 14, 22];
        expect(result).to.eql(expected);
    });
});