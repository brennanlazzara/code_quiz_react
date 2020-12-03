const mongoose = require('mongoose');

const QuestionsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  choices: [String],
  answer: {
    type: String,
    required: true,
  },
});

mongoose.pluralize(null);

const questionsModel = mongoose.model('questions', QuestionsSchema);

module.exports = questionsModel;
