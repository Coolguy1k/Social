const mongoose = require("mongoose");

//mogoose connected, console log yes or err if not
mongoose
  .connect(process.env.MONOGDB_URI || "mongodb://127.0.0.1:27017/nosirnosql")
  .then(() => console.log("Mongoose sucesfully connected"))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;