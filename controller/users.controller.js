'use strict';
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
    return this.data.push(name);
}

module.exports = new Users();