const http = require('http');
const route = require('./route');

  
const server = http.createServer(route.listener);
server.listen(3000)