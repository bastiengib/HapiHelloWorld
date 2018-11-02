'use strict';

const Hapi = require('hapi');
const database = require('./key');
const pg = require('knex')({
    client: 'pg',
    connection: database.connectionString
});
const routes = require('./config/index')(pg);

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.decorate('request', 'getPg', function () {
    return pg;
});

server.route(routes);

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();