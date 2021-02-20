const expect = require('chai').expect;
const rewire = require('rewire');

const app = rewire('../index.js');

describe('sayGoodbye', () => {
    let sayGoodbye = app.__get__("sayGoodbye");

    it('should be a function', () => {
        expect(sayGoodbye).to.be.a('function');
    });

    it('should take an argument and return a goodbye', () => {
        expect(sayGoodbye('futureproof')).to.include('Goodbye, futureproof!');
    })
});