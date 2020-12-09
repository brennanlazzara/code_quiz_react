const resultsModel = require('../models/results.model');

exports.createResults = async (req, res, next) => {
  try {
    console.log(req.body);
    const newResult = await resultsModel.create(req.body);
    res.status(201).json(newResult);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
