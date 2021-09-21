import { ProgrammingRouteRepository } from '../../domain/ProgrammingRouteRepository';
import { SearchAllProgrammingRoutesResponse } from './SearchAllProgrammingRoutesResponse';

export class ProgrammingRoutesFinder {
  constructor(private routeRepository: ProgrammingRouteRepository) {}

  async run(): Promise<SearchAllProgrammingRoutesResponse> {
    const routes = await this.routeRepository.searchAll();
    return new SearchAllProgrammingRoutesResponse(routes);
  }
}
