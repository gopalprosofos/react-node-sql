const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// MySQL
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'finance_advisor',
    password        : 'finance_advisor@123',
    database        : 'finance_advisor'
})


app.get('/list', (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)

        connection.query('SELECT * from advisor_details', (err, rows) => {
            connection.release() 

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

        })
    })
})



// Add a record 
app.post("/create", (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const company = req.body.company;
    const street = req.body.street;
    const city = req.body.city;
    const province = req.body.province;
    const pincode = req.body.pincode;
    const phone = req.body.phone;
    const ext = req.body.ext;
    const fax = req.body.fax;
    const website = req.body.website;
    const email = req.body.email;
    const datasource = req.body.datasource;
    const advisor = req.body.advisor;
  
    pool.query(
      "INSERT INTO advisor_details (first_name,last_name,company,street,city,province,pincode,phone,ext,fax,website,email,datasource,advisor) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [first_name,last_name,company,street,city,province,pincode,phone,ext,fax,website,email,datasource,advisor],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
// app.post('/create', (req, res) => {

//     pool.getConnection((err, connection) => {
//         if(err) throw err
//         console.log(`connected as id ${connection.threadId}`)

//         const params = req.body

//         connection.query('INSERT INTO advisor_details SET ?', params , (err, rows) => {
//             connection.release() // return the connection to pool

//             if(!err) {
//                 res.send(`Finance advisor with the name: ${params.name} has been added.`)
//             } else {
//                 console.log(err)
//             }

//         })

//         console.log(req.body)
//     })
// })


// Listen on enviroment port or 4000
app.listen(port, () => console.log(`Listening on port ${port}`))