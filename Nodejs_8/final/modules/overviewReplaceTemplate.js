module.exports = function (temp, product) {
  let output = temp.replace(/{%PRODUCTIMAGE%}/g, product.image);
  output = output.replace(/{%PRODUCTTITLE%}/g, product.name);
  output = output.replace(/{%TYPE%}/g, product.type);
  let dimensions = `${product.dimensions.length} x ${product.dimensions.width} x ${product.dimensions.height}`;
  output = output.replace(/{%PRODUCTDIAMENTIONALITY%}/g, dimensions);

  output = output.replace(/{%MATERIALTYPE%}/g, product.material);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = product.availability
    ? output.replace(/{%AVAILABLE%}/g, 'inStock')
    : output.replace(/{%AVAILABLE%}/g, 'out of Stock');
  const featuresHTML = product.features
    .map(feature => `<li>${feature}</li>`)
    .join('');
  output = output.replace(/{%FEATURES%}/g, featuresHTML);

  return output;
};
