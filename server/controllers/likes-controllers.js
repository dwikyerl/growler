const { Like } = require('./../models');

exports.addLike = async (req, res) => {
  const likeData = {
    growl: req.params.growlId,
    user: req.user.id
  };

  const like = new Like(likeData);

  try {
    await like.save();
  } catch (e) {
    return res.status(400).json({
       message: 'User already liked this post'
    });
  }

  res.status(200).json({ 
    message: 'Like added successfully',
    like
  });
};

exports.removeLike = async (req, res) => {
  const { growlId, likeId } = req.params;
  const deletedLike = await Like.findOneAndRemove({
    _id: likeId,
    user: req.user.id
  });
  if (deletedLike) {
    res.status(200).json({ 
      message: 'Like removed successfully',
      deletedLike
    });
  } else {
    res.status(404).json({
      message: 'Like not found'
    });
  }
};

exports.getLikes = async (req, res) => {
  const { growlId } = req.params;

  const likes = await Like.find({ growl: growlId });
  res.status(200).json({ 
    message: 'Likes retrieved successfully',
    likes
  });
};