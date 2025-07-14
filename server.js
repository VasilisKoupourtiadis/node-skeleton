const express = require("express");
const path = require("path");
const sql = require("mssql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const config = {
  user: "your_username",
  password: "your_password",
  server: "your_server_name",
  database: "your_database",
  options: {
    trustServerCertificate: true,
    trustedConnection: true,
    enableArithAbort: true,
    instancename: "your_instance",
  },
  port: 1433,
};

app.get("/", (req, res) => {
  res.send("Node skeleton");
});

app.listen(3000, () => {
  console.log("Server available on http://localhost:3000");
});
