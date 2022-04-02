const PORT = 8080;
const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");
const helmet = require("helmet");
const request = require('request')

const app = express();

//middleware------------------
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//
app.get("/", (req, res) => {
  res.send("home");
});
app.get("/api/search", (req, res) => {
  const query = req.query.sear;
  var data2;
  const python = spawn("python3", ["googlePy.py", query]);
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    data2 = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(data2);
  });
  // console.log(query)
  // res.send(query)
});




app.get('/api/home', function(req, res) {
  request('http://127.0.0.1:5000/flask', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //console.log('body:', body); // Print the data received
      res.send(body); //Display the response on the website
    });      
});

app.listen(PORT, () => {
  console.log("running at port 8080");
});
