const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionsSchema = new Schema({
    title: String,
    choices: [String],
    answer: String,
  
});

module.exports = questions = mongoose.model('questions', QuestionsSchema);