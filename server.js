
const mysql = require('mysql2'); 
const express = require('express');

const PORT = process.env.PORT || 3001;

const app  = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
    //  connect to database
    const db = mysql.createConnection(
        {
            host:'localhost', 
            user: 'root',
            password:'password',
            database:'election'
        },
        console.log('Connected to election database')
    )

// db.query(`SELECT * FROM candidates`, (err,rows) => {
//     console.log(rows);
// })
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES (?, ?, ?, ?)`
            const params = [1,'Ronald', 'Firbank', 1];
db.query(sql,params,(err,result) =>{
        if(err) {
            console.log(err);
        }
        console.log(result);
});
app.use((req,res) => {
    res.status(404).end();
});
app.listen(PORT,() =>{
    console.log(`Running on port ${PORT} `);

});