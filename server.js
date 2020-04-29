const http = require('http')

const server = http.createServer(function (request, response) {
    request.on('close ', () => {
        console.log('request closed');
    });

    if (request.method == 'POST') {
        console.log('POST')
        var body = ''
        request.on('data', function (data) {
            body += data
            console.log('Partial body: ' + body)
        })

        request.on('end', function () {
            setTimeout(() => {
                console.log('sending respones now');
                response.writeHead(200, { 'Content-Type': 'text/html' })
                response.end('post received')
            }, 1000 * 60 * 10);
            console.log('Body: ' + body);
        });
    } else {
        console.log('GET');
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Ok');
    }
})

const port = 5000
const host = '10.0.0.50'
server.setTimeout(1000 * 60 * 30);
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)