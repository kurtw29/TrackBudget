const express = require('express');
const app = express();

// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public/dist/public"));

app.listen(8000, ()=>{
    console.log("Listening on port 8000!")
});