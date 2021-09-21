import { ObjectID } from '../../../shared/domain/value-object/ObjectID';
import { Route } from '../../domain/Route';
import { RouteDescription } from '../../domain/RouteDescription';
import { RouteId } from '../../domain/RouteId';
import { RouteName } from '../../domain/RouteName';
import { RouteRepository } from '../../domain/RouteRepository';
import { RouteSiteId } from '../../domain/RouteSiteId';

type Params = {
  routeId: RouteId;
  routeSiteId: RouteSiteId;
  routeName: RouteName;
  routeDownloadType: number[];
  routeWasteType: number[];
  routeDescription?: RouteDescription;
  routeProgramming?: ObjectID;
  routeRestrictions?: Record<string, any>;
  routeAssets?: number[];
  routePath?: string;
};

export class RouteCreator {
  private repository: RouteRepository;
  // private eventBus: EventBus;

  constructor(repository: RouteRepository) {
    this.repository = repository;
    // this.eventBus = eventBus;
  }

  async run({
    routeId,
    routeSiteId,
    routeName,
    routeDownloadType,
    routeWasteType,
    routeDescription,
    routeProgramming,
    routeRestrictions,
    routeAssets,
    routePath
  }: Params): Promise<void> {
    const route = Route.create(
      routeId,
      routeSiteId,
      routeName,
      routeDownloadType,
      routeWasteType,
      routeDescription,
      routeProgramming,
      routeRestrictions,
      routeAssets,
      routePath
    );

    await this.repository.save(route);
    // await this.eventBus.publish(route.pullDomainEvents());
  }
}
