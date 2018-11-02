'use strict';

/* 
 * Constructeur
 */
function Users (db) {
    this.db = db;
}

Users.prototype.getAll = function () {
    return this.db.select('usr_id', 'usr_name').from('users')
    .then(function(data) {
        return data;
    })
    .catch(function(error) {
        console.error(error);
    });
}

Users.prototype.getById = function(id) {
    return db.select('usr_id', 'usr_name').from('users').where('usr_id', id)
    .then(function(obj) {
        return obj;
    })
    .catch(function(error) {
        console.error(error);
    });
}

Users.prototype.addOne = function(name) {
    return db('users').insert({usr_name: name})
    .then(function(obj) {
        return true;
    })
    .catch(function(error) {
        console.error(error);
    });
}
// on exporte en tant que constructeur pour le paramètre
module.exports = Users;