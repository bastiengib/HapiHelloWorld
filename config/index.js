// concaténation de toute les routes.
var about = require('./about.route');
var users = require('./users.route');

module.exports = [].concat(about, users);