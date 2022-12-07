var mysql = require('mysql');

var con = mysql.createConnection({
  host: "student-tracker-pm.database.windows.net",
  port: 1433,
  user: "second-year-pm",
  password: "@LongLivePetta",
  connectTimeout: 30
});

con.connect(function(err) {
  if (err) {
    throw err
  } else {
    console.log("Connected!");
  }
});