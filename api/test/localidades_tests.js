let test = require('tape');
let request = require('supertest');
let app = require('../index');

test('Localidades retornadas corretamente', function (t) {
    request(app)
        .get('/localidades')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            t.end();
        });
}); 