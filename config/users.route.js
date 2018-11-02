'use strict'
var UsersCtrl = require('../controller/users.controller');
function UsersRoute(db) {
    var ctrl = new UsersCtrl(db);
    
    return [{ 
        method: 'GET', 
        path: '/users', 
        handler: function (request, h) {
           return ctrl.getAll();
        } 
    },
    { 
        method: 'GET', 
        path: '/users/{id}', 
        handler: function (request, h) {
            return ctrl.getById(encodeURIComponent(request.params.id));
        } 
    },
    { 
        method: 'POST', 
        path: '/users/new', 
        handler: function (request, h) {
            return ctrl.addOne(encodeURIComponent(request.payload.user));
        } 
    }];
}
// on exporte en tant que constructeur pour le paramètre
module.exports = UsersRoute;