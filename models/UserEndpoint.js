const mongoose = require("mongoose");

const UserEndpoint = mongoose.model("UserEndpoint", {
  user: String,
  endpoint: String
});

module.exports = UserEndpoint;
