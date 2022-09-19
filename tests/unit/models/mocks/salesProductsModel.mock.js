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
  },
  {
    saleId: 3,
    date: "2022-09-14T18:59:41.000Z",
    productId: 1,
    quantity: 1
  }
];

const saleById = [
  {
    date: "2022-09-14T16:28:48.000Z",
    productId: 3,
    quantity: 15
  }
];

const itemSold = [
  {
    productId: 3,
    quantity: 8
  }
];

const itemUpdate = [
  {
    productId: 3,
    quantity: 10
  }
]

const newSale = {
  id: 1,
  itemsSold: [
    {
      productId: 3,
      quantity: 8
    }
  ]
};

const saleUpdate = {
  saleId: 1,
  itemsUpdated: [
    {
      productId: 3,
      quantity: 10
    }
  ]
}

module.exports = {
  allSales,
  saleById,
  itemSold,
  itemUpdate,
  newSale,
  saleUpdate
};