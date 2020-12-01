const questions = require('../models/questions');

exports.getAllQuestions = async (req, res, next) => {
  try {
    const allQuestions = await questions.find({});
    console.log(allQuestions);
    // if (allQuestions)
    //   res.status(200).json(allQuestions);
    // else res.status(404).json();
  } catch (err) {
    res.status(500).json(err);
  }
};
