const http = require('http');
const fs = require('fs');
const url = require('url');
const productCardReplaceTemplate = require('./modules/productCardReplaceTemplate');
const overviewReplaceTemplate = require('./modules/overviewReplaceTemplate');
/*
1. Make the templates
2. Read those templates
3. Read the data
4. Render those data

*/

/* Index.html */

const indexHtmlPage = fs.readFileSync(
  `${__dirname}/templates/index.html`,
  'utf-8'
);

/* Overview.html */

const overViewHtmlPage = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  'utf-8'
);

/* productCard.html */

const productCardHtmlPage = fs.readFileSync(
  `${__dirname}/templates/productCard.html`,
  'utf-8'
);

let productsData = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');

productsData = JSON.parse(productsData);

const server = http.createServer(function (req, res) {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const cardsHtml = productsData
      .map((product, index) =>
        productCardReplaceTemplate(productCardHtmlPage, product, index)
      )
      .join('');

    let output = indexHtmlPage.replace(/{%PRODCUTSCARDS%}/g, cardsHtml);

    res.end(output);
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = productsData[query.id - 1];
    let output = overviewReplaceTemplate(overViewHtmlPage, product);
    res.end(output);
  } else {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, function () {
  console.log('Listening to requests on port 8000');
});
