

var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function (request, response) {

    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */

    var indexPage;

    /* lets try to read the html page found */
    if (pathName === '/todo') {
        fileSystem.readFile('todo.json', callback);
    }
    else if (pathName === '/index') {
        fileSystem.readFile('index.html', callback);
    }
    else if (pathName === '/read-todo') {
        fileSystem.readFile('read-todo.html', callback);
    }
    else {
        fileSystem.readFile(fileName, callback);
    }


    function callback(err, data) {


        if (fileName === 'todo') {
            /* Send the HTTP header 
             * HTTP Status: 200 : OK
             * Content Type: application/json 
             */
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(data.toString());

        }
        else if (fileName == 'index') {
            /* Send the HTTP header 
             * HTTP Status: 200 : OK
             * Content Type: text/html 
             */
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data.toString());
        }
        else if (fileName == 'read-todo') {
            /* Send the HTTP header 
             * HTTP Status: 200 : OK
             * Content Type: text/html 
             */
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data.toString());

        }
        else if (fileName == 'favicon.ico') {
            /* Send the HTTP header 
             * HTTP Status: 200 : OK
             * Content Type: text/html 
             */
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('shoe');

        }
        else {
            /* Send the HTTP header 
             * HTTP Status: 400 : NOT FOUND
             * Content Type: text/html 
             */
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('<!DOCTYPE html><html><body><div><h3>Wyatt Paquin</h3><ul><li>potato</li><li>tomato</li><li>shomato</li></ul></div></body></html>');

        }
        /* the response is complete */
        response.end();
        //console.log(pathName);
    }


}).listen(3000);

// Console will print the message
console.log('Server running at http://localhost:3000/index.html');
