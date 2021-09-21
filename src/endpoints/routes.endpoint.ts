import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

export const register = (router: Router): void => {
  const routesGetController = container.get('Controllers.RoutesGetController');
  router.get('/routes', (req: Request, res: Response) =>
    routesGetController.run(req, res)
  );

  const routeGetController = container.get('Controllers.RouteGetController');
  router.get('/routes/:id', (req: Request, res: Response) =>
    routeGetController.run(req, res)
  );

  const routePutController = container.get('Controllers.RoutePutController');
  router.put('/routes/:id?', (req: Request, res: Response) => {
    return routePutController.run(req, res);
  });

  const routeDeleteController = container.get(
    'Controllers.RouteDeleteController'
  );
  router.delete('/routes/:id', (req: Request, res: Response) => {
    return routeDeleteController.run(req, res);
  });
};
