const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

router.post("/", (req, res, next) => {
  const { user, password } = req.body;

  const valid =
    user === "yourname@passbase.com" &&
    password === "ThisIsAVerySecurePassword123";
  res.json({ valid });
});

app.use("/", router);

app.listen(3050, err => {
  if (err) {
    throw err;
  }
  console.info("Server is listening on port 3050");
});
