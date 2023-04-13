const { log } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();
app.use((req, res, next) => {
  const requestUri = req.url;
//   console.log(requestUri); // The value of $_SERVER['REQUEST_URI']
  
  const data = requestUri
  const delimiter = "|"
  let dataArray = data.split(delimiter)
  console.log(dataArray);
  let fn = dataArray[1]
  if(fn=="INSLIP"){
      let insupdate_success = 0
      let palmtecid = dataArray[2]
      let vehicletype=dataArray[4];
      let vehicleno=dataArray[5];
      let operator=dataArray[6];
      let rdate=dataArray[7].split("/")
      // let date=$rdate[2]."-".$rdate[1]."-".$rdate[0];
      // let mydbdate=$rdate[2]."-".$rdate[1]."-".$rdate[0];
      let time=dataArray[8];
      let collectedamt=dataArray[9];
      let operatorcode=dataArray[10];
      let cancelstatus=dataArray[11];
      let inslipcode=dataArray[12];
  
  }
  
  // Rest of your Express.js middleware logic goes here
  
  next();
});


app.use((req, res, next) => {
  const logData = `Log entry: ${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  // Append to log.txt
  fs.appendFile('log.txt', logData, (err) => {
    if (err) {
      console.error(err);
    }
  });

  next();
});



// Example route
app.get('/', (req, res) => {
  res.send("Database Connection Success!");
});

const port = 3000; // Set the desired port number
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
