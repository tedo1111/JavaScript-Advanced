import { assert, expect } from 'chai';

describe('Smoke tests', () => {
    it('Should always pass', () => {
        assert.equal(true, true);
    });
    
    it('Shoul pass', () => {
        expect(true).to.equal(true);
    });
})
