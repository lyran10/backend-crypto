const mongoose = require("mongoose")

const UserModal = mongoose.Schema({
  email: String,
  password: String,
  token: String,
  watchlist: [],
  // img : {
  //   data : Buffer,
  //   contentType : String
  // }
})


const User = mongoose.model("User", UserModal)

module.exports = { User }