const {createPool} = require('mysql')

const pool = createPool({
  host: "student-tracker-pm.database.windows.net",
  user: "second-year-pm",
  password: "@LongLivePetta",
  connectionLimit: 10
})

pool.query(``, (err, res)=>{
  return console.log(res)
})