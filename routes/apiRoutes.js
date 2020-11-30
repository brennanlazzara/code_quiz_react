const fs = require('fs');

module.exports = (app) => {
  app.get('/api/code_quiz_react_questions', (req, res) => {
    fs.readFile('db/questionBank.json', (err, data) => {
      if (err) throw err;
      let questionBankData = JSON.parse(data);
      res.json(questionBankData);
    });
  });
};
