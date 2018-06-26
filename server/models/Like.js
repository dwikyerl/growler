const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = new Schema({
  growl: {
    type: Schema.Types.ObjectId,
    ref: 'Growl',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

likeSchema.index({ "growl": 1, "user": 1}, { "unique": true });

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;