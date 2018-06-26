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
  const growls = await Growl.find({ author: req.user.id });

  res.status(200).json({
    message: 'Growls retrieved successfully',
    growls,
  });
};

exports.getGrowlById = async (req, res) => {
  const { growlId } = req.params;
  const growl = await Growl.findOne({ _id: growlId, author: req.user.id });

  res.status(200).json({
    message: 'Growl retrieved successfully',
    growl,
  });
};

exports.updateGrowl = async (req, res) => {
  const { growlId } = req.params;
  const updateData = {};
  const { content } = req.body;
  if (content) updateData.content = content;

  const growl = await Growl.findOneAndUpdate({ _id: growlId, author: req.user.id }, updateData, { new: true });

  res.status(200).json({
    message: 'Growl updated successfully',
    growl,
  });
};

exports.deleteGrowl = async (req, res) => {
  const { growlId } = req.params;

  const deletedGrowl = await Growl.findOneAndRemove({ _id: growlId, author: req.user.id });

  res.status(200).json({
    message: 'Growl deleted successfully',
    deletedGrowl
  });
};
