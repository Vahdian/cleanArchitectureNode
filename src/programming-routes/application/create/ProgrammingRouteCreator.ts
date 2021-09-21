import { ProgrammingRouteDescription } from '../../domain/ProgrammingRouteDescription';
import { ProgrammingRouteId } from '../../domain/ProgrammingRouteId';
import { ProgrammingRouteName } from '../../domain/ProgrammingRouteName';
import { ProgrammingRouteRepository } from '../../domain/ProgrammingRouteRepository';
import { ProgrammingRouteSiteId } from '../../domain/ProgrammingRouteSiteId';
import { ProgrammingRoute } from '../../domain/ProgrammingRoute';
import { Profiles } from '../../domain/Profiles';

type Params = {
  programmingRouteId: ProgrammingRouteId;
  programmingRouteSiteId: ProgrammingRouteSiteId;
  programmingRouteName: ProgrammingRouteName;
  programmingRouteDescription: ProgrammingRouteDescription;
  programmingRouteProfiles: Profiles[];
};

export class ProgrammingRouteCreator {
  private repository: ProgrammingRouteRepository;
  // private eventBus: EventBus;

  constructor(repository: ProgrammingRouteRepository) {
    this.repository = repository;
    // this.eventBus = eventBus;
  }

  async run({
    programmingRouteId,
    programmingRouteSiteId,
    programmingRouteName,
    programmingRouteDescription,
    programmingRouteProfiles
  }: Params): Promise<void> {
    const route = ProgrammingRoute.create(
      programmingRouteId,
      programmingRouteSiteId,
      programmingRouteName,
      programmingRouteDescription,
      programmingRouteProfiles
    );

    await this.repository.save(route);
    // await this.eventBus.publish(route.pullDomainEvents());
  }
}
