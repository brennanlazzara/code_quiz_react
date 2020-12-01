const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionsSchema = new Schema({
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
