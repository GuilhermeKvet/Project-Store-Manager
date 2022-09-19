const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const salesProductModel = require('../../../src/models/salesProductModel');

const { allSales, saleById, itemSold, itemUpdate } = require('./mocks/salesProductsModel.mock');

describe('Testando a camada de Model de Sales Products', function () {
  it('Testa a chamada de uma unica venda', async function () {
    sinon.stub(connection, 'execute').resolves([saleById]);

    const result = await salesProductModel.findById(1);

    expect(result).to.deep.equal(saleById);
  });
  it('Testa a chamada de todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([allSales]);

    const result = await salesProductModel.findAll();

    expect(result).to.deep.equal(allSales);
  });
  it('Testa o registro de uma nova venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const result = await salesProductModel.registerSaleProduct(2, itemSold);

    expect(result).to.equal(1);
  });
  it('Testa a atualizacao de uma venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const result = await salesProductModel.updateSaleProduct(2, itemUpdate);

    expect(result).to.equal(1);
  });
  afterEach(sinon.restore);
});