const express = require("express");
const mysql = require('./shared/connect');
const Router = require('./routes/route');

const app = express();
app.use(express.json());
mysql.connect();

app.use('/', Router);
app.listen(3000);



