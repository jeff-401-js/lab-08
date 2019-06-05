'use strict';

const Product = require(`../src/models/categories.js`);
const products = new Product();

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Products Model', () => {
  it('can post() a new product', () => {
    let obj = {name:'Fruit'};
    return products.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a product', () => {
    let obj = {name:'Fruit'};
    return products.post(obj)
      .then(record => {
        return products.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key =>{
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
  it('can put() a product', () => {
    let obj = {name:'Fruit'};
    let obj2 = {name: 'Pizza'};
    return products.post(obj)
      .then(record => {
        return products.put(record._id, obj2)
          .then(category => {
            Object.keys(obj2).forEach(key =>{
              expect(category[key]).toEqual(obj2[key]);
            });
          });
      });
  });

  it('can delete() a product', () => {
    let obj = {name:'Fruit'};
    return products.post(obj)
      .then(record => {
        return products.delete(record._id)
          .then(category => {
            products.get(category._id)
              .then(cat => {
                expect(cat).toNotBe(obj);
              });
          });
      });
  });
});