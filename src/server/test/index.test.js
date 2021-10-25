const axios = require('axios');

test('GET /pie should return 2 entity', () => {
    axios
        .get('http://localhost:8080/pie')
        .then((res) => expect(res.data).toHaveLength(2));
});

test('GET /bar should return 3 entity', () => {
    axios
        .get('http://localhost:8080/bar')
        .then((res) => expect(res.data).toHaveLength(3));
});

test('GET /chart should return an array of records', () => {
    axios
        .get('http://localhost:8080/chart')
        .then((res) => expect(Array.isArray(res.data)).toBe(true));
});

test('POST /chart should return an new record', () => {
    axios
        .post('http://localhost:8080/chart', {
            name: 'jest-test',
            age: 12,
            gender: 'F',
        })
        .then((res) => expect(res.data).toHaveProperty('id'));
});
