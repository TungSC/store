#!/usr/bin/env node

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const port = process.env.PORT
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

import dotenv from 'dotenv';
dotenv.config()

import http from 'http';
import App from '../app.js';
const app = new App();

const server = http.createServer(app.app);
server.listen(process.env.PORT);
server.on('listening', app.listen);
server.on('error', onError);
