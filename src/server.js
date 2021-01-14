const app = require('./app');

require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;

const port = process.env.PORT || 3000;

MongoClient.connect(process.env.MONGO_APP_URI,  { useUnifiedTopology: true }).then((client) => {
    app.locals.db = client.db();
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });
});
