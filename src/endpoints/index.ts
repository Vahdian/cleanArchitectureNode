import { Router } from 'express';
import glob from 'glob';

export const registerRoutes = (router: Router): void => {
  const routes = glob.sync(__dirname + '/**/*.endpoint.*');
  routes.forEach((route: string) => register(route, router));
};

const register = (routePath: string, router: Router) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const route = require(routePath);
  route.register(router);
};
