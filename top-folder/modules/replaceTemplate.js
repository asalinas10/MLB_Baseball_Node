module.exports = (temp, team) => {
  let output = temp.replace(/{%TEAMNAME%}/g, team.Tm);
  output = output.replace(/{%#BATTERS%}/g, team.BATTERS);
  output = output.replace(/{%ID%}/g, team.id);
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
  output = output.replace(/{%OPSPLUS%}/g, team.OPSPLUS);
  output = output.replace(/{%TOTALBASES%}/g, team.TB);
  output = output.replace(/{%GROUNDEDDOUBLEPLAYS%}/g, team.GDP);
  output = output.replace(/{%HITBYPITCH%}/g, team.HBP);
  output = output.replace(/{%SACBUNTS%}/g, team.SH);
  output = output.replace(/{%SACFLYS%}/g, team.SF);
  output = output.replace(/{%INTENTONALWALKS%}/g, team.IBB);
  output = output.replace(/{%LEFTONBASE%}/g, team.LOB);
  output = output.replace(/{%SLUG%}/g, team.SLUG);
  return output;
};
