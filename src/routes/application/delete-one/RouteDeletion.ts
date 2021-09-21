import { RouteId } from '../../domain/RouteId';
import { RouteRepository } from '../../domain/RouteRepository';
import { RouteNotExist } from '../../domain/RouteNotExist';

export class RouteDeletion {
  constructor(private routeRepository: RouteRepository) {}

  async run(id: RouteId): Promise<void> {
    const route = await this.routeRepository.search(id);
    if (!route) {
      throw new RouteNotExist();
    }
    await this.routeRepository.delete(id);
  }
}
