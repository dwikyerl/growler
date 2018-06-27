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
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
 });

growlSchema.virtual('likes', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'growl'
});

function autopopulate(next) {
  this.populate('likes');
  next();
};

growlSchema.pre('find', autopopulate);
growlSchema.pre('findOne', autopopulate);
growlSchema.pre('findById', autopopulate);

const Growl = mongoose.model("Growl", growlSchema);

module.exports = Growl;