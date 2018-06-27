const { Growl } = require('./../models');

exports.createGrowl = async (req, res) => {
  const inputData = {
    content: req.body.content,
    author: req.user.id,
  };

  const growl = await Growl.create(inputData);

  res.status(201).json({
    message: 'Growl posted successfully',
    growl,
  });
};

exports.getAllGrowls = async (req, res) => {
  const growls = await Growl
    .find()
    .populate({
      path: 'author',
      model: 'User',
      select: '-password -createdAt -updatedAt'
    });

  res.status(200).json({
    message: 'Growls retrieved successfully',
    growls,
  });
};

exports.getGrowlById = async (req, res) => {
  const { growlId } = req.params;
  const growl = await Growl
    .findOne({ _id: growlId, author: req.user.id })
    .populate({
      path: 'author',
      model: 'User',
      select: '-password -createdAt -updatedAt'
    });

  if (growl) {
    res.status(200).json({
      message: 'Growl retrieved successfully',
      growl,
    });
  } else {
    res.status(404).json({
      message: 'Growl not found'
    });
  }
};

exports.updateGrowl = async (req, res) => {
  const { growlId } = req.params;
  const updateData = {};
  const { content } = req.body;
  if (content) updateData.content = content;

  const growl = await Growl.findOneAndUpdate({ _id: growlId, author: req.user.id }, updateData, { new: true });

  if (growl) {
    res.status(200).json({
      message: 'Growl updated successfully',
      growl,
    });
  } else {
    res.status(404).json({
      message: 'Growl not found'
    });
  }
};

exports.deleteGrowl = async (req, res) => {
  const { growlId } = req.params;

  const deletedGrowl = await Growl.findOneAndRemove({ _id: growlId, author: req.user.id });
  
  if (deletedGrowl) {
    res.status(200).json({
      message: 'Growl deleted successfully',
      deletedGrowl
    });
  } else {
    res.status(404).json({
      message: 'Growl not found'
    });
  }
};
