import { expect } from "chai";
import { sum } from "../sum.js";

describe('Sum', () => {
    it('Shoulr return the sum of numbers', () => {
        const input = [1, 2, 3];
        const expectedResult = 6;

        const actualResult = sum(input);

        expect(actualResult).to.equal(expectedResult);
    });
});
