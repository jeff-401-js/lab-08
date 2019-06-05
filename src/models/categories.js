'use strict';

const schema = require('./categories-schema.js');

class Categories {

  constructor() {
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return schema.find(queryObject);
  }
  
  post(record) {
  }

  put(_id, record) {
  }

  delete(_id) {
  }

}

module.exports = Categories;
