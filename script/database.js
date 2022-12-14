var mysql = require('mysql');

var con = mysql.createConnection({
  host: "*",
  user: "second-year-pm",
  password: "@LongLivePetta",
  port: '1433'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});