var mysql = import('mysql');

var con = mysql.createConnection({
  host:'10.10.21.98',
    user: 'second-year-pm',
    password: '@LongLivePetta',
    database: 'student-tracker-pm.database.windows.net',
    port: '3001'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(3001, () => {
    console.log ('running on port 3001 yes')
}) 