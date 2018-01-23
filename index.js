function theBeatlesPlay(musicians, instraments) {
  var musicianPlays = [];
  for (i=0; i <= musicians.length; ++i) {
    musicianPlays.push( `"${musicians[i]} plays ${instraments[i]}"`);
  }
  
}