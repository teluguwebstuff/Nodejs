module.exports = function (temp, product) {
  let output = temp.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%TITLE%}/g, product.name);
  output = output.replace(/{%TYPE%}/g, product.type);
  output = output.replace(/{%MATERIAL%}/g, product.material);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(
    /{%AVAILABLILTY%}/g,
    product.availability ? 'inStock' : 'out of stock'
  );
  let features = product.features
    .map(feature => `<li>${feature}</li>`)
    .join('');
  //li,li,li.join()
  output = output.replace(/{%FEATURES%}/g, features);
  output = output.replace(
    /{%DIMENSIONS%}/g,
    product.dimensions.width +
      ' ' +
      product.dimensions.height +
      ' ' +
      product.dimensions.length
  );

  return output;
};
