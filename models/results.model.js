const mongoose = require('mongoose');

const resultsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  results: {
    type: Number,
    required: true,
  },
});

mongoose.pluralize(null);

const resultsModel = mongoose.model('results', resultsSchema);

module.exports = resultsModel;
