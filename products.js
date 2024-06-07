const { faker } = require("@faker-js/faker");

function createRandomProduct() {
  const product = {
    _id: faker.datatype.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    description: faker.commerce.productDescription(),
    brand: faker.company.name(),
    price: faker.commerce.price(10, 200, 2, "$"),
    currency: "USD",
    inStock: faker.datatype.boolean(),
    attributes: {
      material: faker.commerce.productMaterial(),
      color: faker.vehicle.color(),
    },
  };
  return product;
}

function randomProductFactory(number) {
    const products = [];
    for (let i = 0; i < number; i++) {
      products.push(createRandomProduct());
    }
    return products;
  }

  module.exports = { createRandomProduct, randomProductFactory };
  

