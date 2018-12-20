

const express = require('express')
const app = express()
const port = 3000

/*
var fs = require('fs');

var request = require('request');
*/
/*

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('public'))



console.log('after calling readFile');

app.get('/readFile',(req, res)=>{
	fs.readFile('DATA.txt', 'utf8', function(err,contents){
		res.send(contents);
	});
});




/*
var options = {
  uri: 'https://www.googleapis.com/urlshortener/v1/url',
  method: 'POST',
  json: {
    "longUrl": "http://www.google.com/"
  }
};
*/

/*
app.get('/serverRead', (req, response) =>
	{
		request('http://jsonplaceholder.typicode.com/todos/', {json:true}, (error, res, body)=> {
  			if (error) {return console.log(error);}
  				console.log(body.url);
  				console.log(body.explanation);
  				response.send(body);
  					
		});
	});



*/

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'books'
});


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  connection.query("SELECT * FROM authors", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/post', (req,res)=>{
  connection.query("SELECT * FROM authors", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    });
  });





