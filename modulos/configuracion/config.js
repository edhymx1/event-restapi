const promise = require('bluebird');
const options = {
    promiseLib: promise,
};
const pgp = require('pg-promise')(options);

const stringConnection = 'postgresq://postgres:123@localhost:5432/event_uc';

const db = pgp(stringConnection);

module.exports = db;
