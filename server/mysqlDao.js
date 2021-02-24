var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "sqluser",
  password: "sqluserpw",
  database: "memes"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var createTable = "CREATE TABLE IF NOT EXISTS memeTable (url VARCHAR(256));";
  con.query(createTable, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

module.exports = {
  deleteRating: function (ratee, stars, comment) {
    //TODO
  },
  
  getAllRatings: function() {
    con.query("SELECT ratee, stars, comment FROM memeTable;", 
    function (err, result, fields) {
        if (err) throw err;

      // TODO: This for loop will print your resultSet to the console.\
      // Instead, could you put them into a single string, and return that, 
      // so that the route handler can pass it back to your browser?       
        for(var n=0; n < result.length; n++) {
          console.log(result[n]);
        }
    });  
  },
  
  insertMeme: function (url) {
    con.query("INSERT INTO memeTable VALUES ( ? )", [[url]], 
    function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });    
  }
};
