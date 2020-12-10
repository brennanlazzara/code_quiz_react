const questionsModel = require('../models/questions.model');

exports.createQuestion = async (req, res, next) => {
  try {
    const newQuestion = await questionsModel.create(req.body);
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllQuestions = async (req, res, next) => {
  try {
    const allQuestions = await questionsModel.find({});
    if (allQuestions && allQuestions.length > 0)
      res.status(200).json(allQuestions);
    else res.status(404).json();
  } catch (err) {
    res.status(500).json(err);
  }
};
