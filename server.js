const express = require('express');
const app = express();
const db = require('./mongoDB/connection');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.use('/api', require('./routes/api-routes'));

// SERVE STATIC ASSETS IF IN PRODUCTION
if (process.env.NODE_ENV) {
  // SET STATIC FOLDER
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

db.connect();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
