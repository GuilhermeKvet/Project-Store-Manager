const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/salesModel');
const salesProductModel = require('../../../src/models/salesProductModel');
const salesService = require('../../../src/services/salesService');


const { allSales, saleById, newSale, itemSold, saleUpdate, itemUpdate } = require('../models/mocks/salesProductsModel.mock');

describe('Tentando a camada Service de Sales', function () {
  it('Retorna todas as vendas cadastradas', async function () {
    sinon.stub(salesProductModel, 'findAll').resolves(allSales);
    const response = await salesService.findAll();
        
    expect(response.message).to.equal(allSales);
  });
  it('Retorna um venda chamado pelo id', async function () {
    sinon.stub(salesProductModel, 'findById').resolves(saleById);
    const response = await salesService.findById(1);
        
    expect(response.message).to.equal(saleById);
  });
  it('Retorna um erro caso chame um venda com id inexistente', async function () {
    sinon.stub(salesProductModel, 'findById').resolves(null);
    const response = await salesService.findById(999);
        
    expect(response.message).to.equal('Sales not found');
  });
  it('Cadastra uma nova venda', async function () {
    sinon.stub(salesModel, 'insertSale').resolves(1);
    sinon.stub(salesProductModel, 'registerSaleProduct').resolves(newSale);
    const { message } = await salesService.registerSale(itemSold);
        
    expect(message).to.deep.equal(newSale);
  });
  it('Retorna o venda atualizado', async function () {
    sinon.stub(salesProductModel, 'updateSaleProduct').resolves(saleUpdate);
    const { message } = await salesService.updateSale(1, itemUpdate);
        
    expect(message).to.deep.equal(saleUpdate);
  });
  it('Deleta o venda', async function () {
    sinon.stub(salesModel, 'deleteSale').resolves();
    await salesService.deleteSale(2);
  });
  afterEach(sinon.restore);
});