import { Schema, pluralize, model } from 'mongoose';

const resultsSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  results: {
    type: Number,
    required: true,
  },
});

pluralize(null);

const resultsModel = model('results', resultsSchema);

export default resultsModel;
