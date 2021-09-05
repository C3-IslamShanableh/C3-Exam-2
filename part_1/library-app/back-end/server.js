const express = require("express");
const cors = require("cors");
const db = require("../back-end/db");

const app = express();

app.use(express.json())
app.use(cors());

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
