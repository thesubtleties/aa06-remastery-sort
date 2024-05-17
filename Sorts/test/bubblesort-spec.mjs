import { expect } from 'chai';
import { bubbleSort } from '../bubblesort.mjs';

describe('bubbleSort', () => {
    it('should sort an array of numbers correctly', () => {
        const result = bubbleSort([3, 8, 12, 5, 22, 14, 9, 7, 1, 6]);
        const expected = [1, 3, 5, 6, 7, 8, 9, 12, 14, 22];
        expect(result).to.eql(expected);
    });
});
