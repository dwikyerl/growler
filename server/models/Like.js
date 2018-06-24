const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
  growl: {
    type: Schema.Types.ObjectId,
    ref: 'Growl'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;