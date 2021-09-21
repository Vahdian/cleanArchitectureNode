import { RouteId } from '../../domain/RouteId';
import { RouteRepository } from '../../domain/RouteRepository';
import { RouteNotExist } from '../../domain/RouteNotExist';
import { SearchRouteResponse } from './SearchRouteResponse';

export class RouteFinder {
  constructor(private routeRepository: RouteRepository) {}

  async run(id: RouteId): Promise<SearchRouteResponse> {
    const route = await this.routeRepository.search(id);
    if (!route) {
      throw new RouteNotExist();
    }
    return new SearchRouteResponse(route);
  }
}
