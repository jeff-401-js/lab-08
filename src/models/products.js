'use strict';

const uuid = require('uuid/v4');

const schema = {
  id: {required: true},
  name: {required: true},
  category: {required: false},
};

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {
  }
  
  post(entry) {
  }

  put(id, entry) {
  }

  delete(id) {
  }

  sanitize(entry) {
  }

}

module.exports = Products;
