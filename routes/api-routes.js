const router = require('express').Router();
const controller = require('../controller/questions.controller');

router.get('/', (req, res) => {
  res.json({
    status: 'API is working',
    message:
      'Welcome to the questions api router, here we define all functions',
  });
});

router.post('/questions', controller.createQuestion);
router.get('/questions', controller.getAllQuestions);

module.exports = router;
