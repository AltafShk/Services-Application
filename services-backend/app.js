const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const fs = require('fs');
const { Server } = require('http');



__dirname = "../services-start/src/"

var data = [];

let rawData = fs.readFileSync('data.json');
let parsedData = JSON.parse(rawData);
data = parsedData.DATA;

app.use(bodyParser.json());


app.get('/api/accounts', (req, res) => {
  res.json(data);
});


app.post('/api/account', (req, res) => {
  const account = req.body.account;

  data.push(account);
  
  let writableData = JSON.stringify({DATA: data});
  fs.writeFile('data.json', writableData, (err => {
    if(err == null){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true});
    }
    else{
      console.log(err);
    }
  }))
});

app.post('/api/update', (req, res) => {
  const account = req.body.updatedAccount;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if(element.name == account.name){
      element.status = account.newStatus;
    }
  }
 
  let writableData = JSON.stringify({DATA: data});
  fs.writeFile('data.json', writableData, (err => {
    if(err == null){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true});
    }
    else{
      console.log(err);
    }
  }))

});

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   users.push(user);
//   res.json("user addedd");
// });
app.get('/api', (req,res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});