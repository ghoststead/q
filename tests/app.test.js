const request = require('supertest');

const MongoClient = require('mongodb').MongoClient;
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;

const app = require('../src/app');

console.error = jest.fn();

let mongoServer;
let client;

beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const uri = await mongoServer.getUri();
    client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    app.locals.db = client.db('test');
});

afterAll(async () => {
    await client.close();
    await mongoServer.stop();
});

test('app', async () => {
    const res = await request(app)
        .post('/events')
        .send({
            event: 'test',
            foo: 'baz'
        });
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBeTruthy();
});

test('app without event', async () => {
    const res = await request(app)
        .post('/events')
        .send({
            foo: 'baz'
        });
    expect(res.statusCode).toBe(400);
    expect(console.error).toBeCalledTimes(1);
});
