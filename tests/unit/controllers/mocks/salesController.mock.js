const allSales = [
  {
    saleId: 1,
    date: "2022-09-14T16:28:48.000Z",
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: "2022-09-14T16:28:48.000Z",
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: "2022-09-14T16:28:48.000Z",
    productId: 3,
    quantity: 15
  }
]

const saleById = [
  {
    date: "2022-09-14T16:28:48.000Z",
    productId: 1,
    quantity: 5
  },
  {
    date: "2022-09-14T16:28:48.000Z",
    productId: 2,
    quantity: 10
  }
];

const newSale = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1
    }
  ]
};

const updateSale = {
  saleId: "2",
  itemsUpdated: [
    {
      productId: 2,
      quantity: 10
    }
  ]
}

module.exports = {
  allSales,
  saleById,
  newSale,
  updateSale
};