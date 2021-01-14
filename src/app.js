const express = require('express');
const app = express();

const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

app.use(helmet());

// eslint-disable-next-line no-constant-condition
if (typeof 'jest' === 'undefined') {
    /* istanbul ignore next */
    app.use(morgan('combined'));
}
app.use(bodyParser.json({ type: '*/*', limit: '5mb' }));

const eventController = require('./controllers/event');

app.post('/events', eventController.create);

module.exports = app;