const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));

app.use('/api', require('./routes/api-routes'));
require('./routes/htmlRoutes')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
});