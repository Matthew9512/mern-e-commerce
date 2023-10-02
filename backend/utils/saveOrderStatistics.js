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
   // ===
   // await ordersModel.insertMany({
   //    username: username,
   //    price: order.at(0).price,
   //    product: order.at(0).name,
   // });
};

module.exports = saveOrderStatistics;
