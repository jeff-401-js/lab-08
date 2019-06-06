'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {type:String, required:true},
  category: {type:String, required:true},
});

products.pre('save', function(){
  this.name = this.name.toUpperCase();
});

products.post('save', function(){
  console.log('finished saving');
  console.log(this);
});

module.exports = mongoose.model('products', products);