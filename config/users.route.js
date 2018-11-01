var ctrl = require('../controller/users.controller');

module.exports = [
    { 
        method: 'GET', 
        path: '/users', 
        handler: function (request, h) {
           return ctrl.getAll();
        } 
    },
    { 
        method: 'GET', 
        path: '/users/{name}', 
        handler: function (request, h) {
            return ctrl.getById(encodeURIComponent(request.params.name));
        } 
    },
    { 
        method: 'POST', 
        path: '/users/new', 
        handler: function (request, h) {
            return ctrl.addOne(encodeURIComponent(request.payload.user));
        } 
    }
];