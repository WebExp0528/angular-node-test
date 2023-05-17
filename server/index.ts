import { Request, Response } from 'express';

import dotenv from 'dotenv';

dotenv.config();

import server from './server';

const dev = process.env['NODE_ENV'] === 'development';

(async () => {
  /**
   * Start Express server.
   */
  const serverInstance = server.listen(server.get('port'), () => {
    console.log('> Server is running at http://localhost:%d in %s mode', server.get('port'), server.get('env'));
  });
})();
