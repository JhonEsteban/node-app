const Server = require('./server');

require('dotenv').config();

const server = new Server();
server.run();

module.exports = server;
