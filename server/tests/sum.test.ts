import {describe, expect, test} from '@jest/globals';
import {Sum} from '../src/sum';

describe('Sum function', () => {
    test('1 + 2 equals 3', () => {
        expect(Sum(1,2)).toBe(3);
    });
});