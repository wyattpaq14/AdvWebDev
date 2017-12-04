var http = require('http');

http.createServer(function (request, response) {

    /* Gives you the complete url with parameters sent as well person?userid=2234 */
    var url = request.url;
    var newUrl;

    /* Send the HTTP header 
     * HTTP Status: 200 : OK
     * Content Type: text/plain
     */
    response.writeHead(200, {'Content-Type': 'text/plain'});

    /* Send the response body */
    var url2 = url.split("/");


    url2.forEach(function (element) {
        newUrl += element + " ";
    });

    response.end('URL Requested\n' + newUrl);


}).listen(3000);


console.log('Server running at http://localhost:3000/');
