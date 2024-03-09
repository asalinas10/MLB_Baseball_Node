const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////
// Server
const replaceTemplate = (temp, team) => {
  let output = temp.replace(/{%TEAMNAME%}/g, team.Tm);
  output = output.replace(/{%#BATTERS%}/g, team.BATTERS);
  output = output.replace(/{%AGE%}/g, team.BatAge);
  output = output.replace(/{%RUNSPERGAME%}/g, team.R);
  output = output.replace(/{%GAMES%}/g, team.G);
  output = output.replace(/{%PLATEAPPEARANCES%}/g, team.PA);
  output = output.replace(/{%ATBATS%}/g, team.AB);
  output = output.replace(/{%RUNS%}/g, team.R);
  output = output.replace(/{%HITS%}/g, team.H);
  output = output.replace(/{%DOUBLES%}/g, team.DOUBLES);
  output = output.replace(/{%TRIPLES%}/g, team.TRIPLES);
  output = output.replace(/{%HOMERUNS%}/g, team.HR);
  output = output.replace(/{%RBIS%}/g, team.RBI);
  output = output.replace(/{%STOLENBASES%}/g, team.SB);
  output = output.replace(/{%CAUGHTSTEALING%}/g, team.CS);
  output = output.replace(/{%WALKS%}/g, team.BB);
  output = output.replace(/{%STRIKEOUTS%}/g, team.SO);
  output = output.replace(/{%BATTINGAVERAGE%}/g, team.BA);
  output = output.replace(/{%ONBASEPERCENTAGE%}/g, team.OBP);
  output = output.replace(/{%SLUGGING%}/g, team.SLG);
  output = output.replace(/{%OPS%}/g, team.OPS);
  output = output.replace(/{%OPS+%}/g, team.OPSPLUS);
  output = output.replace(/{%TOTALBASES%}/g, team.TB);
  output = output.replace(/{%GROUNDEDDOUBLEPLAYS%}/g, team.GDP);
  output = output.replace(/{%HITBYPITCH%}/g, team.HBP);
  output = output.replace(/{%SACBUNTS%}/g, team.SH);
  output = output.replace(/{%SACFLYS%}/g, team.SF);
  output = output.replace(/{%INTENTONALWALKS%}/g, team.IBB);
  output = output.replace(/{%LEFTONBASE%}/g, team.LOB);
  return output;
};

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
  const pathName = req.url;

  // Overview
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHtml = teamDataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%TEAM_CARDS%}', cardsHtml);
    res.end(output);

    // Team page
  } else if (pathName === '/team') {
    res.end('This is the team');

    // API page
  } else if (pathName === '/api') {
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
