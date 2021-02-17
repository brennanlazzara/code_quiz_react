import express, { urlencoded, json, static } from 'express';
const app = express();
<<<<<<< HEAD
import { connect } from './mongoDB/connection';
=======
const db = require('./mongoDB/connection');
const path = require('path');
>>>>>>> 69969d6c8ab2d4d2a195ba66f1cc983d0c9c431d

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(static('./public'));

app.use('/api', require('./routes/api-routes'));

<<<<<<< HEAD
connect();
=======
// SERVE STATIC ASSETS IF IN PRODUCTION
if (process.env.NODE_ENV) {
  // SET STATIC FOLDER
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

db.connect();
>>>>>>> 69969d6c8ab2d4d2a195ba66f1cc983d0c9c431d

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
