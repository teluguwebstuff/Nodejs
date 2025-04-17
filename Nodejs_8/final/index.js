const http = require('http');
const fs = require('fs');
const url = require('url');
const productCardReplaceTemplate = require('./modules/productCardReplaceTemplate');
const overviewReplaceTemplate = require('./modules/overviewReplaceTemplate');
const indexTemplate = fs.readFileSync(
  `${__dirname}/templates/index.html`,
  'utf-8'
);

const productCardTemplate = fs.readFileSync(
  `${__dirname}/templates/productCard.html`,
  'utf-8'
);

const productOverview = fs.readFileSync(
  `${__dirname}/templates/productOverview.html`,
  'utf-8'
);

let dataObj = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
dataObj = JSON.parse(dataObj);

const server = http.createServer(function (req, res) {
  const { query, pathname } = url.parse(req.url, true);
  if (pathname == '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    let cardsHtml = dataObj
      .map((product, index) =>
        productCardReplaceTemplate(productCardTemplate, product, index)
      )
      .join('');
    let output = indexTemplate.replace('{%PRODUCTSCARDS%}', cardsHtml);
    res.end(output);
  } else if (pathname == '/product') {
    console.log(query.id);
    const product = dataObj[query.id - 1];
    let output = overviewReplaceTemplate(productOverview, product);
    res.end(output);
  }
});

server.listen(7000, function () {
  console.log('Listening to requests on port 7000');
});
