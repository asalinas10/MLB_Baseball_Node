const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////
// Server

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const teamDataObj = JSON.parse(data);
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the overview');
  } else if (pathName === '/team') {
    res.end('This is the team');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/plain',
      'my-own-header': 'hello-world',
    });
    res.end('Page not found!');
  }
});

server.listen(7000, '127.0.0.1', () => {
  console.log('Listening to requests on port 7000');
});

////////////////////////
// Cards/Overview Page
// if (pathName === '/' || pathName === '/overview') {
//   res.writeHead(200, { 'Content-type': 'text/html' });

//   const cardsHtml = dataObj
//     .map((el) => replaceTemplate(tempCard, el))
//     .join(' ');
//   const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

// res.writeHead(200, { 'Content-type': 'text/plain' });
//   res.end('Here it is');
