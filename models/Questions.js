const mongoose = require('mongoose');

const QuestionsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  choices: [
    {
      type: String,
      required: true,
    },
  ],
  answer: {
    type: String,
    required: true,
  },
});

module.exports = questions = mongoose.model('questions', QuestionsSchema);
