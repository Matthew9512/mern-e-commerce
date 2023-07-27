const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersModel = new Schema({
   username: String,
   password: String,
   email: String,
   orderHistory: [
      {
         productName: String,
         productPrice: String,
         orderDate: { type: Date, default: Date.now },
      },
   ],
});

module.exports = mongoose.model('product', usersModel);
