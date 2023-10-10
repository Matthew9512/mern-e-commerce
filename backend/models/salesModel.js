const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesModel = new Schema({
   sale: Boolean,
   discount: Number,
});

module.exports = mongoose.model('sale', salesModel);
