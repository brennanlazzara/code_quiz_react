const resultsModel = require('../model/results.model');

exports.createResults = async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
