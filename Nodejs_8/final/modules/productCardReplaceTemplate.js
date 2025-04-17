module.exports = function (temp, product, index) {
  let output = temp.replace(/{%PRODUCTIMAGE%}/g, product.image);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%CLASSNAME%}/g, index % 2 ? 'top' : 'bottom');
  output = output.replace(/{%PRODUCTTITLE%}/g, product.name);
  output = output.replace(/{%PRODUCTPRICE%}/g, product.price);
  return output;
};
