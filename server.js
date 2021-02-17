import express, { urlencoded, json, static } from 'express';
const app = express();
import { connect } from './mongoDB/connection';

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(static('./public'));

app.use('/api', require('./routes/api-routes'));

connect();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
