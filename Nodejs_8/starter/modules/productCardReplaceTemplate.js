module.exports = function (temp, product, index) {
  let output = temp.replace(/{%TITLE%}/g, product.name);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%CLASSNAME%}/g, index % 2 ? 'top' : 'bttom');
  return output;
};
