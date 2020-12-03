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
    {
      type: String,
      required: true,
    },
    {
      type: String,
      required: true,
    },
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

mongoose.pluralize(null);

const questions = mongoose.model('questions', QuestionsSchema);

module.exports = questions;