const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesService = require('../../../src/services/salesService');
const { salesController } = require('../../../src/controllers');

const { allSales, saleById, newSale, updateSale } = require('./mocks/salesController.mock');

describe('Testando a camada de Controller de Sales', function () {
  it('Busca todos as vendas', async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'findAll')
      .resolves({ type: null, message: allSales });

    await salesController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });
  it('Busca uma venda por id', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'findById')
      .resolves({ type: null, message: saleById });

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleById);
  });
  it('Busca um venda com id inexistente', async function () {
    const res = {};
    const req = { params: { id: 999 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'findById')
      .resolves({ type: 'SALE_NOT_FOUND', message: 'Sale not found' });

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });
  it('Cadastra uma nova venda', async function () {
    const res = {};
    const req = { body: [{ productId: 1, quantity: 1 }] };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'registerSale')
      .resolves({ type: null, message: newSale });

    await salesController.registerSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newSale);
  });
  it('Altera a informacao da venda', async function () {
    const res = {};
    const req = { body: [{ productId: 2, quantity: 10 }], params: 2 };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'updateSale')
      .resolves({ type: null, message: updateSale });

    await salesController.updateSale(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updateSale);
  });
  it('Deleta uma venda', async function () {
    const res = {};
    const req = { params: 1 };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'deleteSale')
      .resolves();

    await salesController.deleteSale(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith();
  });
  afterEach(sinon.restore)
});