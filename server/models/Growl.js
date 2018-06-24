const mongoose = require("mongoose");
const { Schema } = mongoose;

const growlSchema = new Schema({
  content: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Growl = mongoose.model("Growl", growlSchema);

module.exports = Growl;