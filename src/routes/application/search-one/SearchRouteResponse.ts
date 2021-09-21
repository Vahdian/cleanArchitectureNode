import { Route } from '../../domain/Route';

export class SearchRouteResponse {
  readonly route: Route;

  constructor(route: Route) {
    this.route = route;
  }
}
