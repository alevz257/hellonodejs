/** a
 * @fileoverview Description of this file.
 */

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || '8091';
app.use(bodyParser.json());
app.set('trust proxy', true);
app.use(function (req,res,next){
    console.log(req.method + " " + req.path + " - " + req.ip);
      next();
})

app.get('/', (req,res) => {
  console.log(JSON.stringify(req.headers));
  //res.status(200).send(`Ok data is running - lets remove header ! headers recieved:${JSON.stringify(req.headers)}`);
  res.status(200).send(`Ok data is running - lets remove header !`);
});

app.post('/read', (req,res) => {
  try {
    let data = JSON.stringify(req.body);
    console.log(req.body);
    console.log(data);
    res.status(200).send('Data: ' + data);
  } catch(err) {
    console.error(err);
  }
});

app.listen(port, ()=> {
  console.log(`Service is running at http://localhost:${port}`);
});

