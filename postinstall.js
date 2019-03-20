const path = require('path');
const fs = require('fs');
const unzipper = require('unzipper');
fs.createReadStream(path.join(__dirname, 'lib.zip'))
  .pipe(unzipper.Extract({
    path: __dirname,
  }));
