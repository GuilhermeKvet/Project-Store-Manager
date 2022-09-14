// const validateSale = (req, res, next) => {
//   const sales = req.body.map(({ productId, quantity }) => {
//     if (!productId) return res.status(400).json({ message: '"productId" is required' });
//     if (!quantity && quantity !== 0) {
//       return res.status(400).json({ message: '"quantity" is required' });
//     }
//     if (quantity <= 0) {
//       return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
//     }
//     return 1;
//   });
//   if (sales.every((sale) => sale === 1)) {
//     next();
//   } else {
//     res.status(500).json({ message: 'Unexpected error' });
//   }
// };

// module.exports = {
//   validateSale,
// };