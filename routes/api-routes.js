const router = require('express').Router();
const questionsController = require('../controller/questions.controller');
const resultsController = require('../controller/results.controller');

router.get('/', (req, res) => {
  res.json({
    status: 'API is working',
    message:
      'Welcome to the questions api router, here we define all functions',
  });
});

// Questions
router.post('/questions', questionsController.createQuestion);
router.get('/questions', questionsController.getAllQuestions);

// Results
router.post('/results', resultsController.createResults);

module.exports = router;
