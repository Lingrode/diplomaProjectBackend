const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dental").catch(function (err) {
  throw Error(err);
});

module.exports = mongoose;
