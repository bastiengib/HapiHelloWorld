'use strict'
//var AboutCtrl = require('../controller/about.controller');
function AboutRoute(db) {
    //var ctrl = new AboutCtrl(db);
    
    return [
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {
    
                return 'Hello, world!';
            }
        },
        {
            method: 'GET',
            path: '/{name}',
            handler: (request, h) => {
    
                return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
            }
        }
    ];
}
// on exporte en tant que constructeur pour le paramètre
module.exports = AboutRoute;