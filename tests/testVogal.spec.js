const { expect } = require('chai');
const { describe, it } = require('mocha');
const letterFunction = require('../isConsoant');

const consoants = require('./utils/Consoants');

const isConsoant = letterFunction.isConsoant;

describe('isConsoant()', () => {

    it('quando é uma vogal retorna false', () => {
      const a = consoants.map((singleConsoant) => isConsoant(singleConsoant)).find((result) => result === true);
      console.log(a);
        expect(isConsoant('a')).to.be.false;
    });

    it('Quando é uma consoante retorna true', () => {
        expect(isConsoant('b')).to.be.true;
    });

    it('Se não for do tipo string retorna uma mensagem "Não é uma string"', () => {
        expect(isConsoant(1)).to.be.equal("Não é uma string");
    });

    it('Se o tamanho da string for maior que 1 retorna false', () => {
        expect(isConsoant('ab')).to.be.false;
    });
});