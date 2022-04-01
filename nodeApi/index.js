const PORT = 8080
const express = require("express");
const cors = require('cors')
const {spawn} = require('child_process');
const helmet = require("helmet");


const app = express();

//middleware------------------
app.use(helmet());
app.use(express.json());
app.use(
    cors({
      origin : '*',
    }))


//
app.get('/',(req,res)=>{
    res.send("home")
})
app.get('/api/search',(req, res)=>{
    const query = req.query.sear;
    var data2;
    const python = spawn('python3', ['script1.py', query]);
    python.stdout.on('data', function (data) {
       console.log('Pipe data from python script ...');
       data2 = data.toString();
    });
   // in close event we are sure that stream from child process is closed
   python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      // send data to browser
      res.json(data2)
 });
    // console.log(query)
    // res.send(query)
})


app.listen(PORT, ()=>{
    console.log('running at port 8080')
})