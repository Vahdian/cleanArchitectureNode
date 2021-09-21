import { Route } from '../../domain/Route';

export class SearchAllRoutesResponse {
  readonly routes: Array<Route>;

  constructor(routes: Array<Route>) {
    this.routes = routes;
  }
}
