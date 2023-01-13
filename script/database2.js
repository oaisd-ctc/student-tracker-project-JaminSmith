const express=import("express")
const mysql=import("mysql")

const con=mysql.createConnection({
    host:'*',
    user:'second-year-pm',
    password:'@LongLivePetta',
    database:'StudentTrackerPM',
})

con.connect((err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("Connected!")
    }
})

app.get("/fetch",(req,res)=>{
    con.query("select * from StudentInfo",function(err,result,fields){
        if(err)
        {
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(7024,(err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("on port 7024")
    }
})  