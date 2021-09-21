import { RouteRepository } from '../../domain/RouteRepository';
import { SearchAllRoutesResponse } from './SearchAllRoutesResponse';

export class RoutesFinder {
  constructor(private routeRepository: RouteRepository) {}

  async run(): Promise<SearchAllRoutesResponse> {
    const routes = await this.routeRepository.searchAll();

    return new SearchAllRoutesResponse(routes);
  }
}
