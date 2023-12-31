var http = require("http");
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library",
});
http
  .createServer(function (req, res) {
    console.log(req.url);
    console.log(req.method);

    const headers = {
      "Access-Control-Allow-Origin": "*" /* @dev First, read about security */,
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      "Access-Control-Allow-Headers": "* ", // 30 days
      /** add other headers as per requirement */
    };

    if (req.url === "/books" && req.method == "GET") {
      con.connect(function (err) {
        con.query("SELECT * FROM books", function (err, result, fields) {
          console.log(result);

          res.writeHead(200, headers);
          res.write(JSON.stringify(result));
          return res.end();
        });
      });
    } else if (req.url === "/books" && req.method === "POST") {
      req.on("data", (chunk) => {
        console.log(chunk.toString());
        const requstBody = JSON.parse(chunk.toString());
        con.connect(function (err) {
          con.query(
            "INSERT INTO books (name,publisher_id,auther_id,no_of_pages,language,category_id,sub_category_id,publish_date,price,book_pdf,note)values('" +
              requstBody.name +
              "','" +
              requstBody.publisher_id +
              "','" +
              requstBody.auther_id +
              "','" +
              requstBody.no_of_pages +
              "','" +
              requstBody.language +
              "','" +
              requstBody.category_id +
              "','" +
              requstBody.sub_category_id +
              "','" +
              requstBody.publish_date +
              "','" +
              requstBody.price +
              "','" +
              requstBody.book_pdf +
              "','" +
              requstBody.note +
              "')",
            function (err, result, fields) {
              console.log(result);
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.setHeader(
                "Access-Control-Allow-Methods",
                "OPTIONS, GET,POST"
              );
              res.setHeader("Access-Control-Max-Age", 2592000); // 30 days
              res.write(
                JSON.stringify({ message: "Data inserted Successfully " })
              );
              return res.end();
            }
          );
        });
      });
    } else {
      res.writeHead(200, headers);
      res.write("I am home page");
      return res.end();
    }
  })
  .listen(8080);
