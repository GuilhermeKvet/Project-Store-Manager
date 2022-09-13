const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productService = require('../../../src/services/productsService');
const { productsController } = require('../../../src/controllers');

const { newProduct, allProducts, product } = require('./mocks/productsControllers.mock');

describe('Testando a camada de Controller de Products', function () {
  it('Busca todos os produtos', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'getProducts')
      .resolves({ type: null, message: allProducts });

    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });
  it('Busca um produto por id', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'getProductsById')
      .resolves({ type: null, message: product });

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(product);
  });
  it('Busca um produto com id inexistente', async function () {
    const res = {};
    const req = { params: { id: 999 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'getProductsById')
      .resolves({ type: 'WITHOUT_PRODUCTS', message: 'Product not found' });

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  it('Cadastra um novo produto', async function () {
    const res = {};
    const req = { body: { name: 'UmProduto' } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productService, 'registerProduct')
      .resolves({ type: null, message: newProduct });

    await productsController.registerProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });
  afterEach(sinon.restore)
});