const resultsModel = require('../models/results.model');

exports.createResults = async (req, res, next) => {
  try {
    const newResult = await resultsModel.create(req.body);
    res.status(201).json(newResult);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllResults = async (req, res, next) => {
  try {
    const allResults = await resultsModel.find({});
    if (allResults && allResults.length > 0) res.status(200).json(allResults);
    else res.status(404).json();
  } catch (err) {
    res.status(500).json(err);
  }
};
