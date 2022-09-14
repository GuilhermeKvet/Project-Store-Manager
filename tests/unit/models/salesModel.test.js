const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/salesModel');

const { saleById, saleNotFound } = require('./mocks/salesModel.mock');

describe('Testando a camada de Model de Sales', function () {
  it('Testa a chamada de uma unica venda', async function () {
    sinon.stub(connection, 'execute').resolves([saleById]);

    const result = await salesModel.findById(1);

    expect(result).to.deep.equal(saleById);
  });
  it('Testa a chamada de uma venda inexistente', async function () {
    sinon.stub(connection, 'execute').resolves([saleNotFound]);

    const result = await salesModel.findById(999);

    expect(result).to.deep.equal(saleNotFound);
  });
  it('Testa o registro de uma nova venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const result = await salesModel.insertSale();

    expect(result).to.deep.equal(1);
  });
  it('Testa a chamada para deletar uma venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const result = await salesModel.deleteSale(1);

    expect(result).to.equal(1);
  });
  afterEach(sinon.restore);
});