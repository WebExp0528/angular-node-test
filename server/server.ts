import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

import { RegisterRoutes } from './routes';

// Create Express server
const server = express();

// Register Middlewares
server.use(cors());
server.use(express.json({ limit: '100mb' }));
server.use(express.urlencoded({ extended: false, limit: '100mb' }));
server.set('port', process.env['PORT'] || 3000);

/* Swagger files start */
server.use('/api/guide', swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(swaggerUi.generateHTML(await import('./swagger.json'), { customCssUrl: CSS_URL }));
});
/* Swagger files end */

// Register Public Path
server.use('/api/public/static', express.static(path.join(__dirname, '../public/static')));

// Register router
RegisterRoutes(server);

server.get('/', (req, res) => {
  return res.send('API documentation: {server-url}/api/guide');
});
// server.use(notFoundHandler);

export default server;
