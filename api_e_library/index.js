var http = require('http')
var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbiegmvwizu88x',
})


const headers = {
    'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
};

http.createServer(function (req, res) {
    if (req.url === '/books') {
        con.connect(function (err) {

            con.query("SELECT * FROM books", function (err, result, fields) {

                console.log(result);
                // res.writeHead(200, headers);
                // You can also set using the following method
                res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
                res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
                res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
                res.write(JSON.stringify((result)));
                res.end();
            });
        })

    } else {


        res.write(('I am home page'));
        res.end('');
    }

}).listen(8080)
