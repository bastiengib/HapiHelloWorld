module.exports = [
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