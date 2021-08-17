const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded ({extended:true}));

app.get('/', function (req,res){
    res.send("welcome ");
})


app.get('/bmi', function (req,res){
    //console.log(__dirname);
   res.sendFile(__dirname+ "/bmi.html");
})

app.post('/bmi', function (req,res){
    
    console.log(req.body);

    let n1 = Number(req.body.weight);
    let n2 = Number(req.body.height);

    let div = n1 / (n2 * n2) ;
   
    res.send("The Sum of these number is : "+div );
   })

app.listen(3000, function (req,res) {
    console.log("server is running at 3000 ");
})
