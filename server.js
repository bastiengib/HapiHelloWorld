'use strict';

const Hapi = require('hapi');
const routes = require('./config/index');
const registerpg = require('hapi-node-postgres');
const database = require('./key');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const pluginpg = {
    register: registerpg,
    options: {
        connectionString: database,
        native: true
    }
};

server.register(pluginpg, (err) => {
    if (err) {
        console.error('Failed loading "hapi-node-postgres" plugin');
    }
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