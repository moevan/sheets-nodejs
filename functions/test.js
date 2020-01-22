const {google} = require('googleapis');
const {spreadsheetId} = require('../auth/spreadsheet_info');

function test(auth)  {
    const sheets = google.sheets({ version: 'v4',auth });
    // let result = 'initial';
    sheets.spreadsheets.values.get({spreadsheetId: spreadsheetId, range: 'Class Data!A2:F'},
        (err, res)=>{
            if (err) return console.log('The API returned an error: ' + err);
      const rows = res.data.values;
      console.log(res)
    //   if (rows.length) {
    //     console.log('Name, Major:');
    //     // Print columns A and E, which correspond to indices 0 and 4.
    //     rows.map((row) => {
    //       console.log(`${row[0]}, ${row[4]}`);
    //     });
    //   } else {
    //     console.log('No data found.');
    //   }



        });

}

module.exports = test