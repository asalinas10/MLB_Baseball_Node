const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');
////////////////
// Server

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempTeam = fs.readFileSync(
  `${__dirname}/templates/template-team.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const teamDataObj = JSON.parse(data);
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = teamDataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%TEAM_CARDS%}', cardsHtml);
    res.end(output);

    // Team page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = teamDataObj[query.id];
    const output = replaceTemplate(tempTeam, product);
    res.end(output);

    // API page
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    // Not found page
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
