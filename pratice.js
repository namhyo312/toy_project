var products = [
  {
    name: "김남효",
    age: 32,
  },
  {
    name: "정효광",
    age: 33,
  },
];

// products.forEach(function (product, number) {
//   console.log(product.name);
//   console.log(number);
// });

const abc = products.map((product, number) => {
  return product.name;
});
console.log(abc);
