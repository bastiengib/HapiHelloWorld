'use strict';
const database = require('../key');
var pg = require('knex')({
    client: 'pg',
    connection: database.connectionString
});

/* 
 * Constructeur
 */
function Users () {
    this.data = ['toto','tata','titi'];
}

Users.prototype.getAll = function () {
    return this.data
}

Users.prototype.getById = function(id) {
    return this.data[id];
}

Users.prototype.addOne = function(name) {
    return pg('users').insert({usr_name: name});
    //return this.data.push(name);
}

module.exports = new Users();