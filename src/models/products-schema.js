'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {type:String, required:true},
  category: {type:String, required:true},
});

products.pre('save', function(){
  this.name = this.name.toUpperCase();
});

module.exports = mongoose.model('products', products);