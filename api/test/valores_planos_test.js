let test = require('tape');
let request = require('supertest');
let app = require('../index');

test('Planos retornados corretamente', function (t) {
    request(app)
        .post('/calcula')
        .send({
            "origem": 18,
            "destino": 11,
            "duracao": 200,
            "plano": 120
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            t.end();
        });
}); 