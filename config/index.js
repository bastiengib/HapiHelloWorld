// concaténation de toute les routes
var about = require('./about.route');
var users = require('./users.route');
function IndexRoute(db) {
    return [].concat(new about(db), new users(db))
};

module.exports = (arg1) => {return new IndexRoute(arg1)};