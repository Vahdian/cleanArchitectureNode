import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
export const register = (router: Router): void => {
  const programmingRoutesGetController = container.get(
    'Controllers.ProgrammingRoutesGetController'
  );
  router.get('/programming-routes', (req: Request, res: Response) =>
    programmingRoutesGetController.run(req, res)
  );
  const programmingRoutePostController = container.get(
    'Controllers.ProgrammingRoutePostController'
  );
  router.post('/programming-routes/', (req: Request, res: Response) => {
    return programmingRoutePostController.run(req, res);
  });
};
