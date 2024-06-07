// index.js
const { randomProductFactory, createRandomProduct } = require("./products.js");
const { writeJsonFile, readJsonFile } = require("./helpers.js")
function run() {
  let products = readJsonFile("./data", "products.json");
  
  if (process.argv[3]) {
  
    products.push(randomProductFactory(process.argv[3]));
    writeJsonFile('./data', 'products.json', products);
  
  } else {
  
    products.push(createRandomProduct());
    writeJsonFile('./data', 'products.json', products)
  
  }
}

run();