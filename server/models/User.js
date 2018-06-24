const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: [true, "Username has been taken"],
      required: "Username is required"
    },
    email: {
      type: String,
      trim: true,
      unique: [true, "Email has been taken"],
      required: "Email is required"
    },
    password: {
      type: String,
      trim: true,
      required: "Password is required"
    },
    profileImage: {
      type: String
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;