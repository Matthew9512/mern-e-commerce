const usersModel = require('../models/usersModel');
const ordersModel = require('../models/ordersModel');

const saveOrderStatistics = async function (order, username) {
   order.forEach(async (product) => {
      await ordersModel.insertMany({
         username: username,
         price: product.price,
         amount: product.amount,
         name: product.name,
         status: true,
      });
   });
};

module.exports = saveOrderStatistics;
