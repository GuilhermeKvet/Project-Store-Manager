const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');

const { allProducts, product, productNotFound } = require('./mocks/productsModels.mock');

describe('Testando a camada de Model de Products', function () {
  it('Testa a chamada de todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([[allProducts]]);

    const result = await productsModel.findAll();

    expect(result).to.deep.equal([allProducts]);
  });
  it('Testa a chamada de um unico produto', async function () {
    sinon.stub(connection, 'execute').resolves([[product]]);

    const result = await productsModel.findById(1);

    expect(result).to.deep.equal(product);
  });
  it('Testa a chamada de um produto inexistente', async function () {
    sinon.stub(connection, 'execute').resolves([[productNotFound]]);

    const result = await productsModel.findById(999);

    expect(result).to.deep.equal(productNotFound);
  });
  it('Testa a chamada de um produto inexistente', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const result = await productsModel.registerProduct('UmProduto');

    expect(result).to.deep.equal(1);
  });
  afterEach(sinon.restore);
});