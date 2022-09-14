const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');

const { allProducts, product, productRegistered, productUpdate } = require('./mocks/productsServices.mock');

describe('Tentando a camada Service de Products', function () {
  it('Retorna todos os produtos cadastrados', async function () {
    sinon.stub(productsModel, 'findAll').resolves(allProducts);
    const response = await productsService.getProducts();
        
    expect(response.message).to.equal(allProducts);
  });
  it('Retorna um produto chamado pelo id', async function () {
    sinon.stub(productsModel, 'findById').resolves(product);
    const response = await productsService.getProductsById(1);
        
    expect(response.message).to.equal(product);
  });
  it('Retorna um erro caso chame um produto com id inexistente', async function () {
    sinon.stub(productsModel, 'findById').resolves(null);
    const response = await productsService.getProductsById(999);
        
    expect(response.message).to.equal('Product not found');
  });
  it('Retorna o produto cadastrado', async function () {
    sinon.stub(productsModel, 'registerProduct').resolves(1);
    const { message } = await productsService.registerProduct("UmProduto");
        
    expect(message).to.deep.equal(productRegistered);
  });
  it('Retorna o produto atualizado', async function () {
    sinon.stub(productsModel, 'updateProduct').resolves([productUpdate]);
    const { message } = await productsService.updateProduct(2, "Produto atualizado");
        
    expect(message).to.deep.equal(productUpdate);
  });
  it('Deleta o produto', async function () {
    sinon.stub(productsModel, 'deleteProduct').resolves();
    await productsService.deleteProduct(2);
  });
  it('Retorna o produto procurado por nome', async function () {
    sinon.stub(productsModel, 'findAll').resolves(allProducts);
    const { message } = await productsService.findProduct("Martelo");
        
    expect(message).to.deep.equal(product);
  });
  it('Retorna um erro caso nao tenha o produto procurado por nome', async function () {
    sinon.stub(productsModel, 'findAll').resolves([]);
    const { message } = await productsService.findProduct("Martelo");
        
    expect(message).to.deep.equal('Product not found');
  });
  afterEach(sinon.restore);
});