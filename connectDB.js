var mysql = require('mysql');
exports.connectDb = mysql.createConnection({
  host: "db4free.net",
  user: "quocthanh",
  password: "0202Huy2002",
  database: "quocthanhjsc"
});


