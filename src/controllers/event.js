function create(req, res) {
    const db = req.app.locals.db;
    db.collection('events').insertOne(req.body, function (err, result) {
        /* istanbul ignore next */
        if (err) throw err;

        const body = req.body;
        if (!body.event) {
            console.error('Invalid body: ' + JSON.stringify(body));
            return res.status(400).send('');
        }

        res.setHeader('Content-Type', 'application/json');
        res.json(result.ops[0]);
    });
}

module.exports = {
    create
};
