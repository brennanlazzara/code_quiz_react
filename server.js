const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));



app.use('/api', require('./routes/apiRoutes'));
// require('/api', './routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not Found - ' + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({message: err.message, stack: err.stack});
}

app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
});