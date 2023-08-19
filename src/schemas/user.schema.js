const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date },
  address: { type: String },
  avatarUrl: { type: String },
  pasword: { type: String },
  email: { type: String, required: true, unique: true }, 
  username: { type: String, required: true, unique: true } 
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
