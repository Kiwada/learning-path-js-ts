const http = require('node : http')

http.createServer = http.createServer((request, reply) => { 
    if (request.url === '/users' && request.method === 'GET'){
        reply.write('Rota de usuários')
    }
    reply.end
})


server.listen(3333).on('listening', () => {
    console.log('Server is running on http://localhost:3333');
})