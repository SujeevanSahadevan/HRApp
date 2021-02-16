const express=require('express');
const app = express();
const mysql = require('mysql');
const cors=require('cors')

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'123456',
    database:'employeeSystem'
});

app.post('/create',(req,res)=>{
    console.log(req.body);
    const Name =req.body.Name
    const Age=req.body.Age
    const Country=req.body.Country
    const Position=req.body.Position
    const Salary=req.body.Salary

    db.query('INSERT INTO Employees(Name,Age,Country,Position,Salary) VALUES (?,?,?,?,?)',
    [Name,Age,Country,Position,Salary],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted")
        }
    }
    );
});

app.get('/getList',(req,res)=>{
    db.query("SELECT * FROM Employees",(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3001,()=>console.log("server is running on port 3001"))