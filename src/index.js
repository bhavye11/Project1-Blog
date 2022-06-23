const express = require("express");
// const bodyParser = require("body-parser");
const route = require("./routes/route");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb+srv://rhutvik-patel:jiCI0diV4CDbN9Pr@cluster0.afbog.mongodb.net/Project1-Blogs", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
