// Title : NODE JS
// Author : TAMILARASAN M
// Created At : 27-04-2024
// Last Modified Date : 27-04-2024
// Reviewed By :
// Review Date : 
let http = require('http');
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if(request.url=='/'){
        response.write(`<h1> hello world...</h1>`);
    }
    else if(request.url=='/home'){
        response.write(`<h1> Bye...</h1>`);
    }
    response.end();
}).listen(3002);
