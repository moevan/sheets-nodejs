const fs = require('fs');
const {authorize, getNewToken} = require('./auth/auth');
const {listMajors} = require('./functions/listMajors')
const test=require('./functions/test')



// Load client secrets from a local file.
fs.readFile('./auth/client_credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), test);
});






// const sheets = google.sheets({version: 'v4', auth});

