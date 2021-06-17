const express = require("express");
const mysql = require("mysql");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "moviedb",
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

app.get("/addReview", (req, res) => {
  res.sendFile(path.join(__dirname + "/addReview.html"));
});

app.post("/addReview", (req, res) => {
  console.log(req.body);
  const data = {
    movieName: req.body.moviename,
    movieRev: req.body.moviereview,
  };
  connection.connect((err) => {
    if (err) console.log(err);
    console.log("connected to db");

    const statement = `INSERT INTO movie VALUES ("${data.movieName}","${data.movieRev}");`;
    connection.query(statement, (err, result) => {
      if (err) console.log(err);
      console.log(result);
    });
  });
  res.redirect("/");
});

app.get("/viewReview", (req, res) => {
  connection.connect((err) => {
    if (err) console.log(err);
    console.log("connected to db");

    const statement = `SELECT * FROM movie;`;
    connection.query(statement, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.send(result);
    });
  });
});

app.get("/contactUs", (req, res) => {
  res.sendFile(path.join(__dirname + "/contactDetails.html"));
});

app.listen(port, () => {
  console.log("Listening on 5000");
});
